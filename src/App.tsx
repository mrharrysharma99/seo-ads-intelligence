import { useState, useCallback } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import SEOAudit from "./pages/SEOAudit";
import Competitors from "./pages/Competitors";
import Campaigns from "./pages/Campaigns";
import Trends from "./pages/Trends";
import Modal from "./components/Modal";

export type Page = "dashboard" | "seo" | "competitors" | "campaigns" | "trends";
export type ModalType = "newAudit" | "export" | "newCampaign" | "creativeIdeas" | "campaignIdeas" | null;

export default function App() {
  const [page, setPage] = useState<Page>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [modal, setModal] = useState<ModalType>(null);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }, []);

  const openModal = useCallback((type: ModalType) => setModal(type), []);
  const closeModal = useCallback(() => setModal(null), []);

  const renderPage = () => {
    switch (page) {
      case "dashboard":
        return <Dashboard onExport={() => openModal("export")} />;
      case "seo":
        return <SEOAudit onNewAudit={() => openModal("newAudit")} />;
      case "competitors":
        return <Competitors />;
      case "campaigns":
        return (
          <Campaigns
            onExport={() => openModal("export")}
            onNewCampaign={() => openModal("newCampaign")}
            onCreativeIdeas={() => openModal("creativeIdeas")}
            onCampaignIdeas={() => openModal("campaignIdeas")}
          />
        );
      case "trends":
        return <Trends />;
      default:
        return <Dashboard onExport={() => openModal("export")} />;
    }
  };

  return (
    <div className="flex min-h-screen relative z-[1]">
      <Sidebar
        page={page}
        setPage={setPage}
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />
      <main
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? "ml-[240px]" : "ml-[64px]"
        }`}
      >
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex items-center justify-between px-6 py-3 border-b border-line bg-bg1/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="btn btn-ghost !p-2"
              aria-label="Toggle sidebar"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <span className="chip chip-on">
                <span className="w-1.5 h-1.5 rounded-full bg-grn pulse-dot"></span>
                Live
              </span>
              <span className="text-xs text-dim">renthouse.co.in</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                className="input !py-1.5 !pl-8 !pr-3 !text-xs !w-52"
                placeholder="Search keywords, pages..."
              />
              <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 text-dim" width="14" height="14" viewBox="0 0 16 16" fill="none">
                <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <button
              onClick={() => openModal("newAudit")}
              className="btn btn-soft !text-xs"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              New Audit
            </button>
            <div className="w-8 h-8 rounded-full bg-panel3 border border-line2 flex items-center justify-center text-xs font-bold text-grn">
              RH
            </div>
          </div>
        </header>

        {/* Page content */}
        <div className="p-6">
          {renderPage()}
        </div>
      </main>

      {/* Modals */}
      {modal === "newAudit" && (
        <Modal title="Run New SEO Audit" onClose={closeModal} size="md">
          <div className="space-y-4">
            <div>
              <label className="lbl">Target URL</label>
              <input className="input" defaultValue="https://renthouse.co.in" placeholder="Enter URL to audit" />
            </div>
            <div>
              <label className="lbl">Audit Depth</label>
              <select className="select">
                <option>Quick Scan (Top 50 pages)</option>
                <option>Standard (Top 200 pages)</option>
                <option>Deep Crawl (All pages)</option>
              </select>
            </div>
            <div>
              <label className="lbl">Check Categories</label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                {["Technical SEO", "On-Page SEO", "Content Quality", "Mobile UX", "Page Speed", "Backlinks"].map((cat) => (
                  <label key={cat} className="flex items-center gap-2 p-2 rounded-lg bg-panel2/50 border border-line/50 cursor-pointer hover:border-line2 transition-colors">
                    <input type="checkbox" defaultChecked className="accent-[#3ecf8e] w-3.5 h-3.5" />
                    <span className="text-xs text-ink">{cat}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-panel2/50 border border-line/50">
              <span className="dt dt-ai">AI</span>
              <span className="text-xs text-mut">AI will prioritize findings and suggest fixes</span>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button onClick={closeModal} className="btn btn-ghost">Cancel</button>
              <button onClick={() => { closeModal(); showToast("🔍 Audit started — scanning renthouse.co.in..."); }} className="btn btn-prime">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Start Audit
              </button>
            </div>
          </div>
        </Modal>
      )}

      {modal === "export" && (
        <Modal title="Export Report" onClose={closeModal} size="sm">
          <div className="space-y-4">
            <div>
              <label className="lbl">Format</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "pdf", label: "PDF", desc: "Best for sharing" },
                  { id: "csv", label: "CSV", desc: "Raw data" },
                  { id: "xlsx", label: "Excel", desc: "With charts" },
                ].map((f) => (
                  <label key={f.id} className="flex flex-col items-center gap-1 p-3 rounded-lg bg-panel2/50 border border-line/50 cursor-pointer hover:border-grn/40 transition-colors has-[:checked]:border-grn/50 has-[:checked]:bg-grn/5">
                    <input type="radio" name="format" defaultChecked={f.id === "pdf"} className="accent-[#3ecf8e]" />
                    <span className="text-xs font-semibold text-ink">{f.label}</span>
                    <span className="text-[10px] text-dim">{f.desc}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="lbl">Include Sections</label>
              <div className="space-y-1.5 mt-1">
                {["Executive Summary", "SEO Findings", "Keyword Rankings", "Competitor Analysis", "Campaign Performance", "Market Trends"].map((s) => (
                  <label key={s} className="flex items-center gap-2 p-2 rounded-lg bg-panel2/30 cursor-pointer hover:bg-panel2/50 transition-colors">
                    <input type="checkbox" defaultChecked className="accent-[#3ecf8e] w-3.5 h-3.5" />
                    <span className="text-xs text-ink">{s}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button onClick={closeModal} className="btn btn-ghost">Cancel</button>
              <button onClick={() => { closeModal(); showToast("📄 Report exported successfully!"); }} className="btn btn-prime">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M2 10v3h12v-3M8 2v8M5 7l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Export
              </button>
            </div>
          </div>
        </Modal>
      )}

      {modal === "newCampaign" && (
        <Modal title="Create New Campaign" onClose={closeModal} size="lg">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="lbl">Campaign Name</label>
                <input className="input" placeholder="e.g., Bangalore 2BHK Summer Push" />
              </div>
              <div>
                <label className="lbl">Platform</label>
                <select className="select">
                  <option>Google Ads</option>
                  <option>Meta Ads</option>
                  <option>Both</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="lbl">Target City</label>
                <select className="select">
                  <option>Bangalore</option>
                  <option>Hyderabad</option>
                  <option>Pune</option>
                  <option>Chennai</option>
                  <option>Mumbai</option>
                  <option>Delhi NCR</option>
                </select>
              </div>
              <div>
                <label className="lbl">Budget (Monthly)</label>
                <input className="input" placeholder="₹50,000" />
              </div>
            </div>
            <div>
              <label className="lbl">Campaign Objective</label>
              <div className="grid grid-cols-3 gap-2 mt-1">
                {[
                  { id: "traffic", label: "Drive Traffic", icon: "↑" },
                  { id: "leads", label: "Generate Leads", icon: "🎯" },
                  { id: "brand", label: "Brand Awareness", icon: "👁" },
                ].map((o) => (
                  <label key={o.id} className="flex flex-col items-center gap-1 p-3 rounded-lg bg-panel2/50 border border-line/50 cursor-pointer hover:border-grn/40 transition-colors has-[:checked]:border-grn/50 has-[:checked]:bg-grn/5">
                    <input type="radio" name="objective" defaultChecked={o.id === "leads"} className="accent-[#3ecf8e]" />
                    <span className="text-sm">{o.icon}</span>
                    <span className="text-[11px] font-semibold text-ink">{o.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="lbl">Target Keywords (comma separated)</label>
              <input className="input" placeholder="2bhk flat rent, pg in bangalore, house for rent..." />
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-panel2/50 border border-line/50">
              <span className="dt dt-ai">AI</span>
              <span className="text-xs text-mut">AI will suggest optimal ad copies, bids, and targeting based on market data</span>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button onClick={closeModal} className="btn btn-ghost">Cancel</button>
              <button onClick={() => { closeModal(); showToast("🚀 Campaign created! AI is optimizing settings..."); }} className="btn btn-prime">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Create Campaign
              </button>
            </div>
          </div>
        </Modal>
      )}

      {modal === "creativeIdeas" && (
        <Modal title="AI Creative Ideas" onClose={closeModal} size="xl">
          <div className="space-y-5">
            <div className="flex items-center gap-2 p-3 rounded-lg bg-panel2/50 border border-grn/20">
              <span className="dt dt-ai">AI</span>
              <span className="text-xs text-mut">Generated from top-performing Indian rental ad patterns & your campaign data</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Creative Idea Cards */}
              {[
                {
                  title: "Urgency + Location Hook",
                  type: "Search Ad",
                  headline: "2BHK in Whitefield — ₹15K/mo. Move in This Week!",
                  desc: "Description: Verified listings, zero brokerage. 500+ properties available. Book a visit today.",
                  score: 94,
                  tags: ["Urgency", "Price Anchor", "Location"],
                  why: "Combines price specificity with urgency — CTR lift of 23% in similar Bangalore campaigns",
                },
                {
                  title: "Social Proof + Trust",
                  type: "Display Ad",
                  headline: "10,000+ Families Found Homes on RentHouse",
                  desc: "Description: India's most trusted rental platform. Verified owners, transparent pricing, instant connects.",
                  score: 89,
                  tags: ["Social Proof", "Trust", "Scale"],
                  why: "Social proof messaging performs 18% better for first-time renters in Tier-1 cities",
                },
                {
                  title: "Problem-Solution Format",
                  type: "Search Ad",
                  headline: "Tired of Brokerage Fees? Find Direct Owner Rentals",
                  desc: "Description: Skip the middleman. Connect directly with verified property owners. Save up to ₹25,000/year.",
                  score: 91,
                  tags: ["Pain Point", "Savings", "Direct"],
                  why: "Problem-solution framing resonates with 34% more users searching 'without brokerage'",
                },
                {
                  title: "Seasonal + FOMO",
                  type: "Meta Ad",
                  headline: "June Move-In Special: First Month 50% Off!",
                  desc: "Description: Limited period offer on select properties. IT corridor locations. Apply before June 30.",
                  score: 87,
                  tags: ["Seasonal", "Discount", "FOMO"],
                  why: "Seasonal offers during relocation months (May-July) see 2.4x conversion rates",
                },
                {
                  title: "Comparison Hook",
                  type: "Search Ad",
                  headline: "RentHouse vs Others: Save ₹20K on Brokerage",
                  desc: "Description: Compare rental platforms. We show you the real cost. Zero hidden fees, verified listings only.",
                  score: 82,
                  tags: ["Comparison", "Value", "Transparency"],
                  why: "Comparison messaging works well for users in the consideration phase of the funnel",
                },
                {
                  title: "Lifestyle Aspiration",
                  type: "Display Ad",
                  headline: "Your Dream Home in Bangalore Awaits",
                  desc: "Description: Premium apartments, gated communities, modern amenities. Starting ₹12K/month in top localities.",
                  score: 85,
                  tags: ["Aspirational", "Premium", "Lifestyle"],
                  why: "Aspirational copy converts 15% better for premium segment (>₹20K/month) audiences",
                },
              ].map((idea, i) => (
                <div key={i} className="p-4 rounded-xl bg-panel2/60 border border-line/60 hover:border-grn/30 transition-all group">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="chip !text-[9px]">{idea.type}</span>
                      <h4 className="text-xs font-semibold text-ink mt-1.5">{idea.title}</h4>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold" style={{
                        background: idea.score >= 90 ? "rgba(62,207,142,.15)" : idea.score >= 80 ? "rgba(242,179,61,.12)" : "rgba(76,195,247,.12)",
                        color: idea.score >= 90 ? "#3ecf8e" : idea.score >= 80 ? "#f2b33d" : "#4cc3f7",
                        border: `1px solid ${idea.score >= 90 ? "rgba(62,207,142,.3)" : idea.score >= 80 ? "rgba(242,179,61,.3)" : "rgba(76,195,247,.3)"}`
                      }}>
                        {idea.score}
                      </div>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-bg1/60 border border-line/40 mb-2">
                    <p className="text-[11px] font-semibold text-grn leading-relaxed">"{idea.headline}"</p>
                    <p className="text-[10.5px] text-mut mt-1 leading-relaxed">{idea.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {idea.tags.map((t) => (
                      <span key={t} className="text-[9px] px-1.5 py-0.5 rounded bg-panel3/60 text-dim border border-line/30">{t}</span>
                    ))}
                  </div>
                  <p className="text-[10px] text-dim leading-relaxed italic">💡 {idea.why}</p>
                  <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => { closeModal(); showToast("✨ Creative copied to clipboard!"); }} className="btn btn-soft !text-[10px] !py-1 !px-2">Use This</button>
                    <button onClick={() => showToast("📋 Headline copied!")} className="btn btn-ghost !text-[10px] !py-1 !px-2">Copy</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-line/50">
              <button onClick={() => showToast("🔄 Regenerating creative ideas...")} className="btn btn-ghost">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8a6 6 0 0111.5-2.4M14 8a6 6 0 01-11.5 2.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M14 2v4h-4M2 14v-4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Regenerate
              </button>
              <button onClick={closeModal} className="btn btn-prime">Done</button>
            </div>
          </div>
        </Modal>
      )}

      {modal === "campaignIdeas" && (
        <Modal title="AI Campaign Ideas" onClose={closeModal} size="xl">
          <div className="space-y-5">
            <div className="flex items-center gap-2 p-3 rounded-lg bg-panel2/50 border border-grn/20">
              <span className="dt dt-ai">AI</span>
              <span className="text-xs text-mut">Recommended campaigns based on market gaps, seasonal trends, and competitor activity</span>
            </div>

            <div className="space-y-3">
              {[
                {
                  title: "IT Corridor PG Push — Bangalore",
                  objective: "Lead Generation",
                  budget: "₹75,000/mo",
                  expected: "450+ leads",
                  confidence: 92,
                  rationale: "High search volume spike (+34%) for 'pg near tech park' in June. Competitors have low ad density in this segment.",
                  channels: ["Google Search", "Meta"],
                  keywords: ["pg in whitefield", "pg near outer ring road", "student pg bangalore"],
                  timeline: "4 weeks",
                },
                {
                  title: "Monsoon Moving Season — Pan India",
                  objective: "Traffic + Conversions",
                  budget: "₹1.2L/mo",
                  expected: "2,800+ conversions",
                  confidence: 88,
                  rationale: "July-August sees 28% increase in relocation searches. Early campaign launch captures intent before competitors.",
                  channels: ["Google Search", "Display", "Meta"],
                  keywords: ["flat for rent", "house for rent", "apartment rent"],
                  timeline: "8 weeks",
                },
                {
                  title: "No Brokerage — Trust Campaign",
                  objective: "Brand Awareness",
                  budget: "₹50,000/mo",
                  expected: "500K+ impressions",
                  confidence: 85,
                  rationale: "'Without brokerage' searches grew 41% YoY. Position RentHouse as the transparent alternative.",
                  channels: ["Meta", "YouTube"],
                  keywords: ["rent without brokerage", "direct owner rental", "zero brokerage"],
                  timeline: "6 weeks",
                },
                {
                  title: "Premium Segment — Hyderabad Gated",
                  objective: "High-Value Leads",
                  budget: "₹40,000/mo",
                  expected: "120+ premium leads",
                  confidence: 79,
                  rationale: "Underserved segment with high LTV. Average premium lead converts at 3.2x the rate of standard leads.",
                  channels: ["Google Search", "LinkedIn"],
                  keywords: ["3bhk gated community hyderabad", "premium flat rent", "luxury apartment rent"],
                  timeline: "4 weeks",
                },
                {
                  title: "Student Housing — Pune & Chennai",
                  objective: "Seasonal Leads",
                  budget: "₹35,000/mo",
                  expected: "380+ leads",
                  confidence: 83,
                  rationale: "Academic year starts in August. Student housing searches peak 6 weeks before. First-mover advantage.",
                  channels: ["Meta", "Google Search"],
                  keywords: ["student pg pune", "hostel near college", "budget pg chennai"],
                  timeline: "6 weeks",
                },
              ].map((idea, i) => (
                <div key={i} className="p-4 rounded-xl bg-panel2/60 border border-line/60 hover:border-grn/30 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-sm font-semibold text-ink">{idea.title}</h4>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          idea.confidence >= 90 ? "bg-grn/10 text-grn border border-grn/30" :
                          idea.confidence >= 80 ? "bg-amb/10 text-amb border border-amb/30" :
                          "bg-sky/10 text-sky border border-sky/30"
                        }`}>
                          {idea.confidence}% confidence
                        </span>
                      </div>
                      <p className="text-[11px] text-dim leading-relaxed">{idea.rationale}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-bg1/50 border border-line/30">
                      <span className="text-[9px] text-dim uppercase tracking-wider font-semibold">Objective</span>
                      <p className="text-[11px] text-ink font-medium mt-0.5">{idea.objective}</p>
                    </div>
                    <div className="p-2 rounded-lg bg-bg1/50 border border-line/30">
                      <span className="text-[9px] text-dim uppercase tracking-wider font-semibold">Budget</span>
                      <p className="text-[11px] text-ink font-medium mt-0.5">{idea.budget}</p>
                    </div>
                    <div className="p-2 rounded-lg bg-bg1/50 border border-line/30">
                      <span className="text-[9px] text-dim uppercase tracking-wider font-semibold">Expected</span>
                      <p className="text-[11px] text-grn font-medium mt-0.5">{idea.expected}</p>
                    </div>
                    <div className="p-2 rounded-lg bg-bg1/50 border border-line/30">
                      <span className="text-[9px] text-dim uppercase tracking-wider font-semibold">Timeline</span>
                      <p className="text-[11px] text-ink font-medium mt-0.5">{idea.timeline}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-3">
                    <div>
                      <span className="text-[9px] text-dim uppercase tracking-wider font-semibold">Channels</span>
                      <div className="flex gap-1 mt-1">
                        {idea.channels.map((ch) => (
                          <span key={ch} className="chip !text-[9px]">{ch}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-1">
                      <span className="text-[9px] text-dim uppercase tracking-wider font-semibold">Target Keywords</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {idea.keywords.map((kw) => (
                          <span key={kw} className="url-tag !text-[9px]">{kw}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2">
                    <button onClick={() => showToast("📋 Campaign brief saved!")} className="btn btn-ghost !text-[10px] !py-1.5 !px-3">Save Brief</button>
                    <button onClick={() => { closeModal(); showToast("🚀 Launching campaign setup..."); }} className="btn btn-prime !text-[10px] !py-1.5 !px-3">
                      Launch Campaign
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-line/50">
              <button onClick={() => showToast("🔄 Analyzing market for new ideas...")} className="btn btn-ghost">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8a6 6 0 0111.5-2.4M14 8a6 6 0 01-11.5 2.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M14 2v4h-4M2 14v-4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Discover More
              </button>
              <button onClick={closeModal} className="btn btn-prime">Done</button>
            </div>
          </div>
        </Modal>
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 anim-pop">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-panel border border-grn/30 shadow-lg shadow-grn/5">
            <span className="text-xs font-medium text-ink">{toast}</span>
            <button onClick={() => setToast(null)} className="text-dim hover:text-ink transition-colors">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
