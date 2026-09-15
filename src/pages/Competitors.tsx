import { useState } from "react";

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
  const [selectedCompetitor, setSelectedCompetitor] = useState<Competitor | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "campaigns" | "keywords" | "creatives" | "demographics" | "audience">("overview");
  const [competitors, setCompetitors] = useState<Competitor[]>([
    {
      name: "NoBroker",
      domain: "nobroker.in",
      dr: 72,
      keywords: 12450,
      traffic: "2.1M",
      trend: "up",
      overlap: 34,
      activeCampaigns: 18,
      estMonthlySpend: "₹12.5L",
      topCreatives: [
        { title: "Zero Brokerage Flats in Bangalore", type: "Search", score: 91 },
        { title: "Direct Owner Connect - Save ₹25K", type: "Search", score: 88 },
        { title: "Verified Properties Only", type: "Display", score: 82 },
        { title: "PG Stays Without Middlemen", type: "Search", score: 86 },
      ],
      topKeywords: [
        { kw: "flats without brokerage bangalore", pos: 1, vol: "45K", trend: "up" },
        { kw: "pg accommodation near me", pos: 1, vol: "33K", trend: "up" },
        { kw: "rent direct owner", pos: 2, vol: "28K", trend: "stable" },
        { kw: "no broker flats", pos: 1, vol: "22K", trend: "up" },
        { kw: "house for rent without brokerage", pos: 3, vol: "18K", trend: "stable" },
        { kw: "verified rental properties", pos: 2, vol: "15K", trend: "up" },
      ],
      demographics: {
        age: [
          { range: "18-24", pct: 28 },
          { range: "25-34", pct: 42 },
          { range: "35-44", pct: 18 },
          { range: "45+", pct: 12 },
        ],
        gender: { male: 62, female: 38 },
        devices: { mobile: 84, desktop: 14, tablet: 2 },
        locations: [
          { city: "Bangalore", pct: 38 },
          { city: "Hyderabad", pct: 22 },
          { city: "Pune", pct: 18 },
          { city: "Chennai", pct: 14 },
          { city: "Others", pct: 8 },
        ],
      },
      audienceSegments: [
        { name: "Young Professionals 25-34", reach: "850K", engagement: "Very High" },
        { name: "Students & Freshers", reach: "420K", engagement: "High" },
        { name: "IT Sector Employees", reach: "680K", engagement: "Very High" },
        { name: "Budget-Conscious Renters", reach: "1.2M", engagement: "High" },
      ],
      adSpendTrend: [
        { month: "Jan", spend: 8.2 },
        { month: "Feb", spend: 9.1 },
        { month: "Mar", spend: 10.5 },
        { month: "Apr", spend: 11.2 },
        { month: "May", spend: 12.5 },
      ],
    },
    {
      name: "Housing.com",
      domain: "housing.com",
      dr: 78,
      keywords: 18200,
      traffic: "3.8M",
      trend: "up",
      overlap: 28,
      activeCampaigns: 24,
      estMonthlySpend: "₹18.3L",
      topCreatives: [
        { title: "Premium Flats in Top Localities", type: "Display", score: 89 },
        { title: "Verified Listings - 100% Genuine", type: "Search", score: 92 },
        { title: "Find Your Dream Home Today", type: "Display", score: 85 },
        { title: "Luxury Apartments Starting ₹25K", type: "Search", score: 87 },
      ],
      topKeywords: [
        { kw: "flats for rent in bangalore", pos: 1, vol: "67K", trend: "up" },
        { kw: "apartment for rent", pos: 2, vol: "54K", trend: "stable" },
        { kw: "house on rent near me", pos: 3, vol: "41K", trend: "up" },
        { kw: "2bhk flat rent", pos: 2, vol: "38K", trend: "up" },
        { kw: "rental properties in hyderabad", pos: 1, vol: "29K", trend: "stable" },
        { kw: "3bhk apartment for rent", pos: 3, vol: "22K", trend: "up" },
      ],
      demographics: {
        age: [
          { range: "18-24", pct: 15 },
          { range: "25-34", pct: 38 },
          { range: "35-44", pct: 32 },
          { range: "45+", pct: 15 },
        ],
        gender: { male: 58, female: 42 },
        devices: { mobile: 76, desktop: 22, tablet: 2 },
        locations: [
          { city: "Mumbai", pct: 32 },
          { city: "Bangalore", pct: 24 },
          { city: "Delhi NCR", pct: 18 },
          { city: "Pune", pct: 15 },
          { city: "Others", pct: 11 },
        ],
      },
      audienceSegments: [
        { name: "Mid-Career Professionals", reach: "1.1M", engagement: "Very High" },
        { name: "Family Renters", reach: "890K", engagement: "High" },
        { name: "Premium Segment (₹30K+)", reach: "450K", engagement: "High" },
        { name: "Property Investors", reach: "320K", engagement: "Medium" },
      ],
      adSpendTrend: [
        { month: "Jan", spend: 14.2 },
        { month: "Feb", spend: 15.8 },
        { month: "Mar", spend: 16.5 },
        { month: "Apr", spend: 17.2 },
        { month: "May", spend: 18.3 },
      ],
    },
    {
      name: "MagicBricks",
      domain: "magicbricks.com",
      dr: 81,
      keywords: 24300,
      traffic: "5.2M",
      trend: "stable",
      overlap: 41,
      activeCampaigns: 32,
      estMonthlySpend: "₹24.8L",
      topCreatives: [
        { title: "India's #1 Property Site", type: "Display", score: 94 },
        { title: "50L+ Verified Properties", type: "Search", score: 91 },
        { title: "Buy | Rent | Sell - All in One", type: "Search", score: 88 },
        { title: "Expert Guidance for Home Buyers", type: "Display", score: 85 },
      ],
      topKeywords: [
        { kw: "property for sale", pos: 1, vol: "135K", trend: "stable" },
        { kw: "flats for rent", pos: 1, vol: "98K", trend: "up" },
        { kw: "house for sale", pos: 2, vol: "87K", trend: "stable" },
        { kw: "real estate india", pos: 1, vol: "74K", trend: "stable" },
        { kw: "apartments for rent", pos: 2, vol: "62K", trend: "up" },
        { kw: "property sites in india", pos: 1, vol: "45K", trend: "stable" },
      ],
      demographics: {
        age: [
          { range: "18-24", pct: 12 },
          { range: "25-34", pct: 34 },
          { range: "35-44", pct: 36 },
          { range: "45+", pct: 18 },
        ],
        gender: { male: 65, female: 35 },
        devices: { mobile: 72, desktop: 26, tablet: 2 },
        locations: [
          { city: "Mumbai", pct: 28 },
          { city: "Delhi NCR", pct: 22 },
          { city: "Bangalore", pct: 18 },
          { city: "Pune", pct: 14 },
          { city: "Chennai", pct: 10 },
          { city: "Others", pct: 8 },
        ],
      },
      audienceSegments: [
        { name: "Home Buyers (30-45)", reach: "1.8M", engagement: "Very High" },
        { name: "Property Investors", reach: "920K", engagement: "High" },
        { name: "First-Time Buyers", reach: "1.4M", engagement: "High" },
        { name: "Real Estate Agents", reach: "280K", engagement: "Medium" },
      ],
      adSpendTrend: [
        { month: "Jan", spend: 22.5 },
        { month: "Feb", spend: 23.1 },
        { month: "Mar", spend: 24.2 },
        { month: "Apr", spend: 24.5 },
        { month: "May", spend: 24.8 },
      ],
    },
    {
      name: "99acres",
      domain: "99acres.com",
      dr: 79,
      keywords: 21800,
      traffic: "4.5M",
      trend: "down",
      overlap: 37,
      activeCampaigns: 28,
      estMonthlySpend: "₹19.6L",
      topCreatives: [
        { title: "Properties in 500+ Cities", type: "Search", score: 87 },
        { title: "Buy & Sell Properties Online", type: "Display", score: 84 },
        { title: "Trusted by 2Cr+ Users", type: "Search", score: 89 },
        { title: "Residential & Commercial Properties", type: "Display", score: 82 },
      ],
      topKeywords: [
        { kw: "property for sale in bangalore", pos: 2, vol: "89K", trend: "down" },
        { kw: "flats in hyderabad", pos: 2, vol: "67K", trend: "stable" },
        { kw: "house for rent in pune", pos: 3, vol: "52K", trend: "down" },
        { kw: "apartments in chennai", pos: 2, vol: "48K", trend: "stable" },
        { kw: "residential plots", pos: 3, vol: "34K", trend: "down" },
        { kw: "commercial property for rent", pos: 2, vol: "28K", trend: "stable" },
      ],
      demographics: {
        age: [
          { range: "18-24", pct: 14 },
          { range: "25-34", pct: 32 },
          { range: "35-44", pct: 38 },
          { range: "45+", pct: 16 },
        ],
        gender: { male: 68, female: 32 },
        devices: { mobile: 74, desktop: 24, tablet: 2 },
        locations: [
          { city: "Bangalore", pct: 26 },
          { city: "Hyderabad", pct: 24 },
          { city: "Pune", pct: 20 },
          { city: "Chennai", pct: 18 },
          { city: "Others", pct: 12 },
        ],
      },
      audienceSegments: [
        { name: "Property Buyers (35-50)", reach: "1.5M", engagement: "High" },
        { name: "Commercial Investors", reach: "480K", engagement: "Medium" },
        { name: "Land/Plot Buyers", reach: "620K", engagement: "High" },
        { name: "NRI Investors", reach: "180K", engagement: "Medium" },
      ],
      adSpendTrend: [
        { month: "Jan", spend: 21.2 },
        { month: "Feb", spend: 20.8 },
        { month: "Mar", spend: 20.1 },
        { month: "Apr", spend: 19.8 },
        { month: "May", spend: 19.6 },
      ],
    },
    {
      name: "Zolo Stays",
      domain: "zolostays.com",
      dr: 54,
      keywords: 4200,
      traffic: "680K",
      trend: "up",
      overlap: 18,
      activeCampaigns: 12,
      estMonthlySpend: "₹4.8L",
      topCreatives: [
        { title: "Fully Furnished PG Stays", type: "Search", score: 86 },
        { title: "WiFi | Meals | Laundry Included", type: "Search", score: 89 },
        { title: "Student & Professional PG", type: "Display", score: 83 },
        { title: "Hassle-Free PG Living", type: "Search", score: 85 },
      ],
      topKeywords: [
        { kw: "pg in bangalore", pos: 2, vol: "38K", trend: "up" },
        { kw: "furnished pg near me", pos: 1, vol: "24K", trend: "up" },
        { kw: "pg with food", pos: 2, vol: "19K", trend: "up" },
        { kw: "student pg accommodation", pos: 1, vol: "16K", trend: "stable" },
        { kw: "working professional pg", pos: 2, vol: "14K", trend: "up" },
        { kw: "pg in whitefield", pos: 3, vol: "12K", trend: "up" },
      ],
      demographics: {
        age: [
          { range: "18-24", pct: 52 },
          { range: "25-34", pct: 38 },
          { range: "35-44", pct: 8 },
          { range: "45+", pct: 2 },
        ],
        gender: { male: 58, female: 42 },
        devices: { mobile: 92, desktop: 7, tablet: 1 },
        locations: [
          { city: "Bangalore", pct: 48 },
          { city: "Hyderabad", pct: 22 },
          { city: "Pune", pct: 18 },
          { city: "Chennai", pct: 8 },
          { city: "Others", pct: 4 },
        ],
      },
      audienceSegments: [
        { name: "College Students", reach: "320K", engagement: "Very High" },
        { name: "Young IT Professionals", reach: "280K", engagement: "Very High" },
        { name: "Freshers & Interns", reach: "180K", engagement: "High" },
        { name: "Budget-Conscious Migrants", reach: "420K", engagement: "High" },
      ],
      adSpendTrend: [
        { month: "Jan", spend: 3.2 },
        { month: "Feb", spend: 3.8 },
        { month: "Mar", spend: 4.1 },
        { month: "Apr", spend: 4.5 },
        { month: "May", spend: 4.8 },
      ],
    },
    {
      name: "Nestaway",
      domain: "nestaway.com",
      dr: 48,
      keywords: 3100,
      traffic: "420K",
      trend: "down",
      overlap: 12,
      activeCampaigns: 8,
      estMonthlySpend: "₹2.8L",
      topCreatives: [
        { title: "Hassle-Free Home Rentals", type: "Search", score: 78 },
        { title: "Zero Brokerage Guaranteed", type: "Search", score: 82 },
        { title: "Quality Homes, Transparent Pricing", type: "Display", score: 75 },
        { title: "Rental Homes Made Simple", type: "Search", score: 79 },
      ],
      topKeywords: [
        { kw: "rental homes without brokerage", pos: 3, vol: "18K", trend: "down" },
        { kw: "furnished flats for rent", pos: 4, vol: "15K", trend: "down" },
        { kw: "monthly rental homes", pos: 3, vol: "12K", trend: "stable" },
        { kw: "apartment rent no deposit", pos: 5, vol: "9K", trend: "down" },
        { kw: "flexible rental agreements", pos: 4, vol: "7K", trend: "stable" },
        { kw: "verified rental properties", pos: 6, vol: "6K", trend: "down" },
      ],
      demographics: {
        age: [
          { range: "18-24", pct: 32 },
          { range: "25-34", pct: 48 },
          { range: "35-44", pct: 15 },
          { range: "45+", pct: 5 },
        ],
        gender: { male: 55, female: 45 },
        devices: { mobile: 88, desktop: 11, tablet: 1 },
        locations: [
          { city: "Bangalore", pct: 42 },
          { city: "Hyderabad", pct: 24 },
          { city: "Pune", pct: 20 },
          { city: "Chennai", pct: 10 },
          { city: "Others", pct: 4 },
        ],
      },
      audienceSegments: [
        { name: "Young Professionals 25-34", reach: "240K", engagement: "High" },
        { name: "Tech Sector Employees", reach: "180K", engagement: "High" },
        { name: "Migrants to Tier-1 Cities", reach: "320K", engagement: "Medium" },
        { name: "Brokerage-Averse Renters", reach: "280K", engagement: "High" },
      ],
      adSpendTrend: [
        { month: "Jan", spend: 3.5 },
        { month: "Feb", spend: 3.2 },
        { month: "Mar", spend: 3.0 },
        { month: "Apr", spend: 2.9 },
        { month: "May", spend: 2.8 },
      ],
    },
  ]);

  const removeCompetitor = (domain: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm(`Remove this competitor from tracking?`)) {
      setCompetitors(competitors.filter(c => c.domain !== domain));
      if (selectedCompetitor?.domain === domain) setSelectedCompetitor(null);
    }
  };

  const getCreativeDetails = (title: string, competitor: string) => {
    const details: Record<string, { description: string; imagePrompt: string; videoPrompt: string; adCopy: string }> = {
      "Zero Brokerage Flats in Bangalore": {
        description: "Search ad targeting cost-conscious renters in Bangalore with zero brokerage messaging",
        imagePrompt: "Modern 2BHK apartment interior in Bangalore, bright natural lighting, clean minimalist design, text overlay 'ZERO BROKERAGE' in bold green, price tag '₹15,000/mo', professional real estate photography style, 16:9 aspect ratio, vibrant colors",
        videoPrompt: "15-second vertical video: Quick cuts of modern Bangalore apartments, text animations showing 'ZERO BROKERAGE' appearing with cash savings animation (₹25,000 saved), upbeat background music, end card with CTA 'Book Free Visit', smooth transitions, professional real estate tour style",
        adCopy: "🏠 Zero Brokerage Flats in Bangalore\n✅ Direct owner connect\n✅ Save up to ₹25,000/year\n✅ 1000+ verified listings\n\nBook your free visit today! →"
      },
      "Direct Owner Connect - Save ₹25K": {
        description: "Value-focused ad emphasizing direct owner connection and savings",
        imagePrompt: "Split-screen comparison: Left side frustrated person with broker (red tint), Right side happy person with owner (green tint), text 'SAVE ₹25,000' in bold, Indian urban setting",
        videoPrompt: "20-second horizontal video: Story of renter saving money - broker fees counted (₹25,000), transitions to direct owner meeting, happy handshake, text 'DIRECT CONNECT = BIG SAVINGS'",
        adCopy: "💰 Save ₹25,000 on Brokerage!\nConnect directly with property owners. No middlemen.\n🔹 Verified owners only\n🔹 Instant responses\nStart saving today! →"
      },
      "Verified Properties Only": {
        description: "Trust-focused ad highlighting property verification",
        imagePrompt: "Shield/badge icon with checkmark, surrounded by property thumbnails, text '100% VERIFIED' in bold, trust badges, blue and green color scheme, professional design",
        videoPrompt: "12-second vertical video: Verification process animation - document scanning, property photos being checked, green checkmarks appearing, text 'EVERY PROPERTY VERIFIED'",
        adCopy: "✅ 100% Verified Properties\nEvery listing personally verified. No fake photos.\n🔹 Real photos\n🔹 Real owners\nBrowse verified listings →"
      },
      "PG Stays Without Middlemen": {
        description: "PG accommodation ad targeting students and young professionals",
        imagePrompt: "Student studying in PG room, books and laptop, text 'PG STAYS - NO BROKERAGE', youthful energetic design, budget-friendly aesthetic",
        videoPrompt: "18-second vertical video: Student life in PG - studying, cooking, friends, text 'Perfect PG for students', upbeat music",
        adCopy: "🎓 PG Stays Without Brokerage\nPerfect for students & young professionals.\n🔹 Starting ₹4,000/month\n🔹 WiFi + Meals included\n🔹 Near colleges\nFind your PG →"
      },
    };

    return details[title] || {
      description: `Ad creative currently running by ${competitor}`,
      imagePrompt: `Professional real estate advertisement for ${competitor}, modern apartment interior, clean design, text overlay with property details, Indian urban setting, 16:9 aspect ratio`,
      videoPrompt: `15-20 second real estate video ad for ${competitor}, property tour with smooth transitions, text animations highlighting key features, upbeat music, vertical format`,
      adCopy: `🏠 ${title}\nFind the perfect property with ${competitor}.\n✅ Verified listings\n✅ Direct owner connect\nBrowse now →`
    };
  };

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "campaigns", label: "Campaigns" },
    { id: "keywords", label: "Keywords" },
    { id: "creatives", label: "Creatives" },
    { id: "demographics", label: "Demographics" },
    { id: "audience", label: "Audience" },
  ];

  return (
    <div className="space-y-6 reveal-stagger">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Competitor Intelligence</h1>
          <p className="text-sm text-mut mt-1">Track and benchmark against key competitors in the rental market</p>
        </div>
        <button className="btn btn-prime !text-xs">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          Add Competitor
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {competitors.map((comp) => (
          <div key={comp.domain} className="panel p-4 hover:border-grn/40 transition-all cursor-pointer group relative" onClick={() => { setSelectedCompetitor(comp); setActiveTab("overview"); }}>
            <button onClick={(e) => removeCompetitor(comp.domain, e)} className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-ros/10 text-dim hover:text-ros" title="Remove competitor">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
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
                    <path d="M2 8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
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
            <p className="text-xs text-dim mt-0.5">Keywords where we compete directly with top competitors</p>
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
              {[
                { kw: "2bhk flat for rent", ourPos: 3, compPos: 2, comp: "MagicBricks" },
                { kw: "pg accommodation near me", ourPos: 5, compPos: 1, comp: "NoBroker" },
                { kw: "flat without brokerage", ourPos: 4, compPos: 3, comp: "Housing.com" },
                { kw: "house for rent in bangalore", ourPos: 7, compPos: 4, comp: "99acres" },
                { kw: "1bhk rent in hyderabad", ourPos: 5, compPos: 6, comp: "NoBroker" },
              ].map((kw, i) => (
                <tr key={i}>
                  <td className="font-medium text-ink">{kw.kw}</td>
                  <td><span className="font-display font-bold text-grn">{kw.ourPos}</span></td>
                  <td><span className="font-display font-bold text-ros">{kw.compPos}</span></td>
                  <td><span className="chip">{kw.comp}</span></td>
                  <td>
                    <span className={`text-xs font-semibold ${
                      kw.ourPos < kw.compPos ? "text-grn" : "text-ros"
                    }`}>
                      {kw.ourPos < kw.compPos ? `+${kw.compPos - kw.ourPos} ahead` : `${kw.ourPos - kw.compPos} behind`}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Competitor Detail Drawer */}
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
                {tabs.map((tab) => (
                  <button key={tab.id} onClick={() => setActiveTab(tab.id as any)} className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${activeTab === tab.id ? "bg-grn/10 text-grn border border-grn/30" : "text-mut hover:text-ink hover:bg-panel2"}`}>{tab.label}</button>
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

                  <div>
                    <h4 className="text-xs font-semibold text-ink mb-3 uppercase tracking-wider">Ad Spend Trend (Last 5 Months)</h4>
                    <div className="h-32 flex items-end gap-2">
                      {selectedCompetitor.adSpendTrend.map((d, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                          <div className="w-full bg-sky/20 rounded-t relative" style={{ height: `${(d.spend / Math.max(...selectedCompetitor.adSpendTrend.map(x => x.spend))) * 100}%` }}>
                            <div className="absolute inset-0 bg-gradient-to-t from-sky/40 to-sky/10 rounded-t"/>
                          </div>
                          <span className="text-[9px] text-dim">{d.month}</span>
                          <span className="text-[9px] text-mut font-mono">₹{d.spend}L</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-ink mb-3 uppercase tracking-wider">Quick Stats</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-lg bg-panel2/40 border border-line/40">
                        <span className="text-[10px] text-dim">Top Keyword</span>
                        <p className="text-xs text-ink font-medium mt-1">{selectedCompetitor.topKeywords[0]?.kw}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-panel2/40 border border-line/40">
                        <span className="text-[10px] text-dim">Primary Demographic</span>
                        <p className="text-xs text-ink font-medium mt-1">{selectedCompetitor.demographics.age.reduce((a, b) => a.pct > b.pct ? a : b).range} years</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "campaigns" && (
                <div className="space-y-4 anim-in">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-lg bg-panel2/50 border border-line/50">
                      <span className="text-[9px] text-dim uppercase tracking-wider font-semibold">Active Campaigns</span>
                      <p className="font-display text-lg font-bold text-ink mt-0.5">{selectedCompetitor.activeCampaigns}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-panel2/50 border border-line/50">
                      <span className="text-[9px] text-dim uppercase tracking-wider font-semibold">Est. Monthly Budget</span>
                      <p className="font-display text-lg font-bold text-grn mt-0.5">{selectedCompetitor.estMonthlySpend}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-panel2/50 border border-line/50">
                      <span className="text-[9px] text-dim uppercase tracking-wider font-semibold">Avg. CPC</span>
                      <p className="font-display text-lg font-bold text-ink mt-0.5">₹{(Math.random() * 15 + 10).toFixed(1)}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-ink mb-3 uppercase tracking-wider">Campaign Types</h4>
                    <div className="space-y-2">
                      {[{ type: "Search Ads", pct: 45 }, { type: "Display Ads", pct: 30 }, { type: "Shopping Ads", pct: 15 }, { type: "Video Ads", pct: 10 }].map((ct, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-24 text-xs text-mut">{ct.type}</div>
                          <div className="flex-1 h-2 rounded-full bg-panel2 overflow-hidden">
                            <div className="h-full rounded-full bg-vio" style={{ width: `${ct.pct}%` }}/>
                          </div>
                          <span className="text-xs font-mono font-bold text-ink w-10 text-right">{ct.pct}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-ink mb-3 uppercase tracking-wider">Campaign Focus Areas</h4>
                    <div className="space-y-2">
                      {selectedCompetitor.topKeywords.slice(0, 4).map((kw, i) => (
                        <div key={i} className="p-3 rounded-lg bg-panel2/40 border border-line/40">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-medium text-ink">{kw.kw}</span>
                            <span className="text-[10px] text-grn font-semibold">Position {kw.pos}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] text-dim">Volume: {kw.vol}</span>
                            <span className={`text-[9px] font-bold ${kw.trend === "up" ? "text-grn" : kw.trend === "down" ? "text-ros" : "text-amb"}`}>{kw.trend}</span>
                          </div>
                        </div>
                      ))}
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
                          <td>
                            <span className={`text-[10px] font-bold uppercase ${
                              kw.trend === "up" ? "text-grn" : kw.trend === "down" ? "text-ros" : "text-amb"
                            }`}>
                              {kw.trend === "up" ? "↑" : kw.trend === "down" ? "↓" : "→"} {kw.trend}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === "creatives" && (
                <div className="space-y-4 anim-in">
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-amb/5 border border-amb/20">
                    <span className="dt dt-ai">AI</span>
                    <span className="text-xs text-mut">Actual creatives detected from competitor ads. Use the AI prompts below to generate similar visuals.</span>
                  </div>

                  <div className="panel">
                    <div className="panel-hd">
                      <div>
                        <h3 className="text-sm font-semibold text-ink">Active Ad Creatives</h3>
                        <p className="text-xs text-dim mt-0.5">Real creatives currently running by {selectedCompetitor.name}</p>
                      </div>
                      <span className="chip">
                        <span className="dt dt-ai">AI</span>
                        Scored
                      </span>
                    </div>
                    <div className="panel-bd space-y-4">
                      {selectedCompetitor.topCreatives.map((ad, i) => {
                        const creativeDetails = getCreativeDetails(ad.title, selectedCompetitor.name);
                        return (
                          <div key={i} className="p-4 rounded-xl bg-panel2/50 border border-line/50 space-y-3">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <p className="text-xs font-semibold text-ink mb-1">{ad.title}</p>
                                <div className="flex items-center gap-2">
                                  <span className="chip !text-[9px]">{ad.type}</span>
                                  <span className="text-[10px] text-dim">• {creativeDetails.description}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold" style={{
                                  background: ad.score >= 90 ? "rgba(62,207,142,.15)" : ad.score >= 80 ? "rgba(242,179,61,.12)" : "rgba(76,195,247,.12)",
                                  color: ad.score >= 90 ? "#3ecf8e" : ad.score >= 80 ? "#f2b33d" : "#4cc3f7",
                                  border: `1px solid ${ad.score >= 90 ? "rgba(62,207,142,.3)" : ad.score >= 80 ? "rgba(242,179,61,.3)" : "rgba(76,195,247,.3)"}`
                                }}>
                                  {ad.score}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-1.5 rounded-full bg-panel2 overflow-hidden">
                                <div
                                  className={`h-full rounded-full ${
                                    ad.score >= 90 ? "bg-grn" : ad.score >= 80 ? "bg-amb" : "bg-sky"
                                  }`}
                                  style={{ width: `${ad.score}%` }}
                                />
                              </div>
                              <span className="text-[10px] font-mono font-bold text-ink">{ad.score}/100</span>
                            </div>

                            <div className="pt-3 border-t border-line/40 space-y-2">
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold text-amb uppercase tracking-wider">🎨 AI Prompts</span>
                                <span className="text-[9px] text-dim">Copy & use with AI image/video generators</span>
                              </div>
                              
                              <div className="p-2.5 rounded-lg bg-bg1/60 border border-line/40 group/prompt">
                                <div className="flex items-center justify-between mb-1.5">
                                  <span className="text-[9px] font-semibold text-sky uppercase tracking-wider">Image Generation Prompt</span>
                                  <button
                                    onClick={() => {
                                      navigator.clipboard.writeText(creativeDetails.imagePrompt);
                                      alert("Image prompt copied!");
                                    }}
                                    className="opacity-0 group-hover/prompt:opacity-100 transition-opacity text-[9px] text-grn hover:text-grn font-semibold"
                                  >
                                    📋 Copy
                                  </button>
                                </div>
                                <p className="text-[10.5px] text-mut leading-relaxed font-mono">{creativeDetails.imagePrompt}</p>
                              </div>

                              <div className="p-2.5 rounded-lg bg-bg1/60 border border-line/40 group/prompt">
                                <div className="flex items-center justify-between mb-1.5">
                                  <span className="text-[9px] font-semibold text-vio uppercase tracking-wider">Video Generation Prompt</span>
                                  <button
                                    onClick={() => {
                                      navigator.clipboard.writeText(creativeDetails.videoPrompt);
                                      alert("Video prompt copied!");
                                    }}
                                    className="opacity-0 group-hover/prompt:opacity-100 transition-opacity text-[9px] text-grn hover:text-grn font-semibold"
                                  >
                                    📋 Copy
                                  </button>
                                </div>
                                <p className="text-[10.5px] text-mut leading-relaxed font-mono">{creativeDetails.videoPrompt}</p>
                              </div>

                              <div className="p-2.5 rounded-lg bg-bg1/60 border border-line/40 group/prompt">
                                <div className="flex items-center justify-between mb-1.5">
                                  <span className="text-[9px] font-semibold text-grn uppercase tracking-wider">Ad Copy Template</span>
                                  <button
                                    onClick={() => {
                                      navigator.clipboard.writeText(creativeDetails.adCopy);
                                      alert("Ad copy copied!");
                                    }}
                                    className="opacity-0 group-hover/prompt:opacity-100 transition-opacity text-[9px] text-grn hover:text-grn font-semibold"
                                  >
                                    📋 Copy
                                  </button>
                                </div>
                                <p className="text-[10.5px] text-mut leading-relaxed">{creativeDetails.adCopy}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
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
                          <span className="w-12 text-right text-xs font-mono font-bold text-ink">{age.pct}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="panel p-4">
                    <h4 className="text-xs font-semibold text-ink mb-3">Gender Split</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-lg bg-panel2/50 border border-line/50 text-center">
                        <p className="font-display text-2xl font-bold text-sky">{selectedCompetitor.demographics.gender.male}%</p>
                        <span className="text-[10px] text-dim uppercase tracking-wider font-semibold">Male</span>
                      </div>
                      <div className="p-3 rounded-lg bg-panel2/50 border border-line/50 text-center">
                        <p className="font-display text-2xl font-bold text-ros">{selectedCompetitor.demographics.gender.female}%</p>
                        <span className="text-[10px] text-dim uppercase tracking-wider font-semibold">Female</span>
                      </div>
                    </div>
                  </div>

                  <div className="panel p-4">
                    <h4 className="text-xs font-semibold text-ink mb-3">Device Breakdown</h4>
                    <div className="space-y-2">
                      {[
                        { device: "Mobile", pct: selectedCompetitor.demographics.devices.mobile, color: "bg-grn" },
                        { device: "Desktop", pct: selectedCompetitor.demographics.devices.desktop, color: "bg-sky" },
                        { device: "Tablet", pct: selectedCompetitor.demographics.devices.tablet, color: "bg-vio" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-16 text-xs text-mut">{item.device}</div>
                          <div className="flex-1 h-2 rounded-full bg-panel2 overflow-hidden">
                            <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.pct}%` }}/>
                          </div>
                          <span className="w-12 text-right text-xs font-mono font-bold text-ink">{item.pct}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="panel p-4">
                    <h4 className="text-xs font-semibold text-ink mb-3">Top Locations</h4>
                    <div className="space-y-2">
                      {selectedCompetitor.demographics.locations.map((loc, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-20 text-xs text-mut truncate">{loc.city}</div>
                          <div className="flex-1 h-2 rounded-full bg-panel2 overflow-hidden">
                            <div className="h-full rounded-full bg-amb" style={{ width: `${loc.pct}%` }}/>
                          </div>
                          <span className="w-12 text-right text-xs font-mono font-bold text-ink">{loc.pct}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "audience" && (
                <div className="space-y-4 anim-in">
                  <div className="panel p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-semibold text-ink">Target Audience Segments</h3>
                      <span className="chip">
                        <span className="dt dt-ai">AI</span>
                        Inferred
                      </span>
                    </div>
                    <div className="space-y-3">
                      {selectedCompetitor.audienceSegments.map((seg, i) => (
                        <div key={i} className="p-4 rounded-lg bg-panel2/50 border border-line/50">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-xs font-semibold text-ink">{seg.name}</h4>
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
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
