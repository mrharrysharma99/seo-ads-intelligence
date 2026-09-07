import { useState } from "react";

interface CityDetail {
  city: string;
  demand: number;
  supply: number;
  avgRent: string;
  change: string;
  hot: boolean;
  medianRent: string;
  rentTrend: { month: string; rent: number }[];
  topLocalities: { name: string; avgRent: string; demand: number; supply: number }[];
  propertyTypes: { type: string; percentage: number; avgRent: string }[];
  demographics: {
    ageGroups: { range: string; percentage: number }[];
    professions: { profession: string; percentage: number }[];
  };
  topKeywords: { keyword: string; volume: string; growth: string }[];
  opportunities: { title: string; description: string; potential: string }[];
}

const cityDetails: CityDetail[] = [
  {
    city: "Bangalore",
    demand: 92,
    supply: 78,
    avgRent: "₹18,500",
    change: "+5.2%",
    hot: true,
    medianRent: "₹16,200",
    rentTrend: [
      { month: "Jan", rent: 16800 },
      { month: "Feb", rent: 17100 },
      { month: "Mar", rent: 17500 },
      { month: "Apr", rent: 17800 },
      { month: "May", rent: 18000 },
      { month: "Jun", rent: 18500 },
    ],
    topLocalities: [
      { name: "Whitefield", avgRent: "₹22,000", demand: 95, supply: 72 },
      { name: "Koramangala", avgRent: "₹28,500", demand: 88, supply: 65 },
      { name: "Indiranagar", avgRent: "₹32,000", demand: 90, supply: 58 },
      { name: "Electronic City", avgRent: "₹14,500", demand: 85, supply: 82 },
      { name: "HSR Layout", avgRent: "₹24,000", demand: 87, supply: 70 },
    ],
    propertyTypes: [
      { type: "1BHK", percentage: 35, avgRent: "₹12,500" },
      { type: "2BHK", percentage: 45, avgRent: "₹18,500" },
      { type: "3BHK", percentage: 15, avgRent: "₹28,000" },
      { type: "PG/Shared", percentage: 5, avgRent: "₹8,500" },
    ],
    demographics: {
      ageGroups: [
        { range: "18-24", percentage: 28 },
        { range: "25-34", percentage: 45 },
        { range: "35-44", percentage: 18 },
        { range: "45+", percentage: 9 },
      ],
      professions: [
        { profession: "IT Professionals", percentage: 52 },
        { profession: "Students", percentage: 18 },
        { profession: "Startup Employees", percentage: 15 },
        { profession: "Others", percentage: 15 },
      ],
    },
    topKeywords: [
      { keyword: "flat for rent in whitefield", volume: "45K", growth: "+142%" },
      { keyword: "2bhk rent koramangala", volume: "32K", growth: "+89%" },
      { keyword: "pg in electronic city", volume: "28K", growth: "+67%" },
      { keyword: "furnished flat bangalore", volume: "24K", growth: "+54%" },
    ],
    opportunities: [
      { title: "PG Market in Whitefield", description: "High demand from IT professionals with limited supply", potential: "High" },
      { title: "Furnished 2BHK Segment", description: "Growing demand from young professionals, low competition", potential: "Very High" },
      { title: "Pet-Friendly Rentals", description: "Emerging trend with 67% search growth", potential: "Medium" },
    ],
  },
  {
    city: "Hyderabad",
    demand: 85,
    supply: 82,
    avgRent: "₹14,200",
    change: "+3.8%",
    hot: true,
    medianRent: "₹12,800",
    rentTrend: [
      { month: "Jan", rent: 13200 },
      { month: "Feb", rent: 13500 },
      { month: "Mar", rent: 13800 },
      { month: "Apr", rent: 14000 },
      { month: "May", rent: 14100 },
      { month: "Jun", rent: 14200 },
    ],
    topLocalities: [
      { name: "Gachibowli", avgRent: "₹18,500", demand: 92, supply: 78 },
      { name: "HITEC City", avgRent: "₹16,800", demand: 88, supply: 75 },
      { name: "Kondapur", avgRent: "₹15,200", demand: 85, supply: 80 },
      { name: "Madhapur", avgRent: "₹14,500", demand: 82, supply: 82 },
      { name: "Kukatpally", avgRent: "₹12,000", demand: 78, supply: 88 },
    ],
    propertyTypes: [
      { type: "1BHK", percentage: 38, avgRent: "₹10,500" },
      { type: "2BHK", percentage: 42, avgRent: "₹14,200" },
      { type: "3BHK", percentage: 12, avgRent: "₹22,000" },
      { type: "PG/Shared", percentage: 8, avgRent: "₹7,500" },
    ],
    demographics: {
      ageGroups: [
        { range: "18-24", percentage: 32 },
        { range: "25-34", percentage: 42 },
        { range: "35-44", percentage: 16 },
        { range: "45+", percentage: 10 },
      ],
      professions: [
        { profession: "IT Professionals", percentage: 58 },
        { profession: "Students", percentage: 22 },
        { profession: "Pharma Employees", percentage: 12 },
        { profession: "Others", percentage: 8 },
      ],
    },
    topKeywords: [
      { keyword: "pg in gachibowli", volume: "38K", growth: "+95%" },
      { keyword: "2bhk rent hitec city", volume: "28K", growth: "+78%" },
      { keyword: "co-living hyderabad", volume: "22K", growth: "+89%" },
      { keyword: "flat near hitec city", volume: "18K", growth: "+65%" },
    ],
    opportunities: [
      { title: "Co-living Spaces", description: "89% growth in searches, perfect for young IT professionals", potential: "Very High" },
      { title: "Budget PG Segment", description: "High student demand with affordable pricing opportunities", potential: "High" },
      { title: "Furnished Apartments", description: "Growing preference among working professionals", potential: "Medium" },
    ],
  },
  {
    city: "Pune",
    demand: 78,
    supply: 88,
    avgRent: "₹13,800",
    change: "+2.1%",
    hot: false,
    medianRent: "₹12,500",
    rentTrend: [
      { month: "Jan", rent: 13200 },
      { month: "Feb", rent: 13400 },
      { month: "Mar", rent: 13500 },
      { month: "Apr", rent: 13600 },
      { month: "May", rent: 13700 },
      { month: "Jun", rent: 13800 },
    ],
    topLocalities: [
      { name: "Hinjewadi", avgRent: "₹16,500", demand: 85, supply: 82 },
      { name: "Kothrud", avgRent: "₹18,000", demand: 75, supply: 85 },
      { name: "Viman Nagar", avgRent: "₹15,800", demand: 80, supply: 88 },
      { name: "Wakad", avgRent: "₹14,200", demand: 82, supply: 90 },
      { name: "Kharadi", avgRent: "₹13,500", demand: 78, supply: 92 },
    ],
    propertyTypes: [
      { type: "1BHK", percentage: 40, avgRent: "₹10,800" },
      { type: "2BHK", percentage: 45, avgRent: "₹14,500" },
      { type: "3BHK", percentage: 10, avgRent: "₹20,000" },
      { type: "PG/Shared", percentage: 5, avgRent: "₹7,200" },
    ],
    demographics: {
      ageGroups: [
        { range: "18-24", percentage: 35 },
        { range: "25-34", percentage: 38 },
        { range: "35-44", percentage: 18 },
        { range: "45+", percentage: 9 },
      ],
      professions: [
        { profession: "IT Professionals", percentage: 48 },
        { profession: "Students", percentage: 28 },
        { profession: "Auto/Manufacturing", percentage: 14 },
        { profession: "Others", percentage: 10 },
      ],
    },
    topKeywords: [
      { keyword: "flat for rent in hinjewadi", volume: "32K", growth: "+72%" },
      { keyword: "1bhk rent pune", volume: "28K", growth: "+58%" },
      { keyword: "pg in wakad", volume: "22K", growth: "+65%" },
      { keyword: "furnished flat kothrud", volume: "18K", growth: "+48%" },
    ],
    opportunities: [
      { title: "Student Housing", description: "Large student population with seasonal demand peaks", potential: "High" },
      { title: "IT Corridor Rentals", description: "Steady demand from Hinjewadi IT park employees", potential: "Medium" },
      { title: "Budget Segment", description: "Affordable options with good supply-demand balance", potential: "Medium" },
    ],
  },
  {
    city: "Chennai",
    demand: 72,
    supply: 85,
    avgRent: "₹12,500",
    change: "+1.4%",
    hot: false,
    medianRent: "₹11,200",
    rentTrend: [
      { month: "Jan", rent: 12100 },
      { month: "Feb", rent: 12200 },
      { month: "Mar", rent: 12300 },
      { month: "Apr", rent: 12400 },
      { month: "May", rent: 12450 },
      { month: "Jun", rent: 12500 },
    ],
    topLocalities: [
      { name: "OMR", avgRent: "₹15,500", demand: 78, supply: 82 },
      { name: "Adyar", avgRent: "₹18,000", demand: 70, supply: 88 },
      { name: "Velachery", avgRent: "₹13,200", demand: 75, supply: 85 },
      { name: "T. Nagar", avgRent: "₹16,800", demand: 72, supply: 90 },
      { name: "Porur", avgRent: "₹11,500", demand: 68, supply: 92 },
    ],
    propertyTypes: [
      { type: "1BHK", percentage: 42, avgRent: "₹9,500" },
      { type: "2BHK", percentage: 40, avgRent: "₹13,200" },
      { type: "3BHK", percentage: 14, avgRent: "₹19,500" },
      { type: "PG/Shared", percentage: 4, avgRent: "₹6,800" },
    ],
    demographics: {
      ageGroups: [
        { range: "18-24", percentage: 25 },
        { range: "25-34", percentage: 40 },
        { range: "35-44", percentage: 22 },
        { range: "45+", percentage: 13 },
      ],
      professions: [
        { profession: "IT Professionals", percentage: 42 },
        { profession: "Manufacturing", percentage: 22 },
        { profession: "Healthcare", percentage: 18 },
        { profession: "Others", percentage: 18 },
      ],
    },
    topKeywords: [
      { keyword: "flat for rent in omr", volume: "28K", growth: "+52%" },
      { keyword: "2bhk rent chennai", volume: "24K", growth: "+38%" },
      { keyword: "furnished flat adyar", volume: "18K", growth: "+42%" },
      { keyword: "rental apartment velachery", volume: "15K", growth: "+35%" },
    ],
    opportunities: [
      { title: "IT Corridor Rentals", description: "Growing IT sector creating steady rental demand", potential: "Medium" },
      { title: "Family Apartments", description: "Higher percentage of family renters compared to other cities", potential: "Medium" },
      { title: "Budget Segment", description: "Affordable market with good supply availability", potential: "Low" },
    ],
  },
  {
    city: "Mumbai",
    demand: 95,
    supply: 45,
    avgRent: "₹32,000",
    change: "+7.8%",
    hot: true,
    medianRent: "₹28,500",
    rentTrend: [
      { month: "Jan", rent: 29500 },
      { month: "Feb", rent: 30200 },
      { month: "Mar", rent: 30800 },
      { month: "Apr", rent: 31200 },
      { month: "May", rent: 31600 },
      { month: "Jun", rent: 32000 },
    ],
    topLocalities: [
      { name: "Andheri", avgRent: "₹35,000", demand: 92, supply: 42 },
      { name: "Bandra", avgRent: "₹48,000", demand: 88, supply: 35 },
      { name: "Powai", avgRent: "₹38,500", demand: 90, supply: 48 },
      { name: "Thane", avgRent: "₹22,000", demand: 85, supply: 55 },
      { name: "Goregaon", avgRent: "₹28,000", demand: 87, supply: 50 },
    ],
    propertyTypes: [
      { type: "1BHK", percentage: 48, avgRent: "₹22,000" },
      { type: "2BHK", percentage: 38, avgRent: "₹35,000" },
      { type: "3BHK", percentage: 10, avgRent: "₹55,000" },
      { type: "PG/Shared", percentage: 4, avgRent: "₹12,000" },
    ],
    demographics: {
      ageGroups: [
        { range: "18-24", percentage: 22 },
        { range: "25-34", percentage: 42 },
        { range: "35-44", percentage: 24 },
        { range: "45+", percentage: 12 },
      ],
      professions: [
        { profession: "Finance/Banking", percentage: 32 },
        { profession: "Entertainment/Media", percentage: 22 },
        { profession: "IT/ITES", percentage: 28 },
        { profession: "Others", percentage: 18 },
      ],
    },
    topKeywords: [
      { keyword: "flat for rent in andheri", volume: "52K", growth: "+128%" },
      { keyword: "1bhk rent mumbai", volume: "48K", growth: "+95%" },
      { keyword: "furnished flat bandra", volume: "35K", growth: "+82%" },
      { keyword: "rental apartment powai", volume: "28K", growth: "+75%" },
    ],
    opportunities: [
      { title: "Premium Segment", description: "High demand with limited supply, premium pricing possible", potential: "Very High" },
      { title: "Shared Accommodation", description: "Growing demand from young professionals due to high rents", potential: "High" },
      { title: "Suburban Areas", description: "Thane and extended suburbs offer value opportunities", potential: "Medium" },
    ],
  },
  {
    city: "Delhi NCR",
    demand: 88,
    supply: 62,
    avgRent: "₹16,800",
    change: "+4.5%",
    hot: true,
    medianRent: "₹15,200",
    rentTrend: [
      { month: "Jan", rent: 15800 },
      { month: "Feb", rent: 16100 },
      { month: "Mar", rent: 16400 },
      { month: "Apr", rent: 16600 },
      { month: "May", rent: 16700 },
      { month: "Jun", rent: 16800 },
    ],
    topLocalities: [
      { name: "Gurgaon", avgRent: "₹22,500", demand: 92, supply: 58 },
      { name: "Noida", avgRent: "₹15,800", demand: 85, supply: 68 },
      { name: "South Delhi", avgRent: "₹28,000", demand: 80, supply: 45 },
      { name: "Dwarka", avgRent: "₹14,500", demand: 82, supply: 72 },
      { name: "Faridabad", avgRent: "₹11,200", demand: 75, supply: 78 },
    ],
    propertyTypes: [
      { type: "1BHK", percentage: 35, avgRent: "₹12,500" },
      { type: "2BHK", percentage: 45, avgRent: "₹17,500" },
      { type: "3BHK", percentage: 15, avgRent: "₹26,000" },
      { type: "PG/Shared", percentage: 5, avgRent: "₹8,500" },
    ],
    demographics: {
      ageGroups: [
        { range: "18-24", percentage: 26 },
        { range: "25-34", percentage: 44 },
        { range: "35-44", percentage: 20 },
        { range: "45+", percentage: 10 },
      ],
      professions: [
        { profession: "Corporate/Consulting", percentage: 38 },
        { profession: "IT/ITES", percentage: 32 },
        { profession: "Government", percentage: 15 },
        { profession: "Others", percentage: 15 },
      ],
    },
    topKeywords: [
      { keyword: "flat for rent in gurgaon", volume: "45K", growth: "+108%" },
      { keyword: "2bhk rent noida", volume: "32K", growth: "+82%" },
      { keyword: "furnished flat south delhi", volume: "28K", growth: "+68%" },
      { keyword: "rental apartment dwarka", volume: "22K", growth: "+58%" },
    ],
    opportunities: [
      { title: "Gurgaon Corporate Housing", description: "High demand from corporate professionals with premium budgets", potential: "Very High" },
      { title: "Noida Extension", description: "Emerging area with good value proposition", potential: "High" },
      { title: "Shared Accommodation", description: "Growing demand from young professionals in expensive areas", potential: "Medium" },
    ],
  },
];

export default function Trends() {
  const [selectedCity, setSelectedCity] = useState<CityDetail | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "localities" | "demographics" | "keywords" | "opportunities">("overview");

  const trendingKeywords = [
    { kw: "flat for rent in bangalore without brokerage", vol: "33.1K", growth: "+142%", heat: "hot" },
    { kw: "co-living spaces in hyderabad", vol: "18.2K", growth: "+89%", heat: "hot" },
    { kw: "pet friendly rental apartments", vol: "12.4K", growth: "+67%", heat: "warm" },
    { kw: "furnished flat near metro station", vol: "9.8K", growth: "+54%", heat: "warm" },
    { kw: "short term rental pune", vol: "7.2K", growth: "+48%", heat: "warm" },
    { kw: "serviced apartment chennai monthly", vol: "6.1K", growth: "+35%", heat: "cool" },
  ];

  const cityTrends = [
    { city: "Bangalore", demand: 92, supply: 78, avgRent: "₹18,500", change: "+5.2%", hot: true },
    { city: "Hyderabad", demand: 85, supply: 82, avgRent: "₹14,200", change: "+3.8%", hot: true },
    { city: "Pune", demand: 78, supply: 88, avgRent: "₹13,800", change: "+2.1%", hot: false },
    { city: "Chennai", demand: 72, supply: 85, avgRent: "₹12,500", change: "+1.4%", hot: false },
    { city: "Mumbai", demand: 95, supply: 45, avgRent: "₹32,000", change: "+7.8%", hot: true },
    { city: "Delhi NCR", demand: 88, supply: 62, avgRent: "₹16,800", change: "+4.5%", hot: true },
  ];

  const seasonalData = [
    { month: "Jan", demand: 65, supply: 70 },
    { month: "Feb", demand: 72, supply: 68 },
    { month: "Mar", demand: 85, supply: 72 },
    { month: "Apr", demand: 78, supply: 75 },
    { month: "May", demand: 70, supply: 78 },
    { month: "Jun", demand: 82, supply: 74 },
    { month: "Jul", demand: 88, supply: 76 },
    { month: "Aug", demand: 92, supply: 72 },
    { month: "Sep", demand: 95, supply: 68 },
    { month: "Oct", demand: 88, supply: 70 },
    { month: "Nov", demand: 75, supply: 74 },
    { month: "Dec", demand: 68, supply: 76 },
  ];

  return (
    <div className="space-y-6 reveal-stagger">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Market Trends</h1>
          <p className="text-sm text-mut mt-1">Real-time rental market intelligence across Indian cities</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="chip">
            <span className="dt dt-calc">Live</span>
            Updated 15m ago
          </span>
        </div>
      </div>

      {/* City Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {cityTrends.map((city) => (
          <div 
            key={city.city} 
            className="panel p-4 hover:border-grn/40 transition-all cursor-pointer group"
            onClick={() => {
              const detail = cityDetails.find(c => c.city === city.city);
              if (detail) {
                setSelectedCity(detail);
                setActiveTab("overview");
              }
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold text-ink group-hover:text-grn transition-colors">{city.city}</h3>
                {city.hot && (
                  <span className="text-[10px] font-bold text-ros bg-ros/10 border border-ros/30 px-1.5 py-0.5 rounded">
                    🔥 HOT
                  </span>
                )}
              </div>
              <span className="text-xs font-semibold text-grn">{city.change}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div>
                <span className="text-[10px] text-dim uppercase tracking-wider font-semibold">Demand</span>
                <p className="font-display text-lg font-bold text-ink">{city.demand}</p>
              </div>
              <div>
                <span className="text-[10px] text-dim uppercase tracking-wider font-semibold">Supply</span>
                <p className="font-display text-lg font-bold text-ink">{city.supply}</p>
              </div>
              <div>
                <span className="text-[10px] text-dim uppercase tracking-wider font-semibold">Avg Rent</span>
                <p className="font-display text-lg font-bold text-ink">{city.avgRent}</p>
              </div>
            </div>
            {/* Demand vs Supply bar */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[9px] text-dim font-semibold w-12">Demand</span>
              <div className="flex-1 h-2 rounded-full bg-panel2 overflow-hidden flex">
                <div className="h-full bg-grn rounded-l-full" style={{ width: `${city.demand}%` }}/>
              </div>
              <span className="text-[9px] text-dim font-semibold w-12 text-right">Supply</span>
              <div className="flex-1 h-2 rounded-full bg-panel2 overflow-hidden flex">
                <div className="h-full bg-sky rounded-l-full" style={{ width: `${city.supply}%` }}/>
              </div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-line/50">
              <span className="text-[10px] text-dim">Click for details</span>
              <span className="text-[10px] text-grn font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                View Details →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Seasonal Chart */}
      <div className="panel">
        <div className="panel-hd">
          <div>
            <h3 className="text-sm font-semibold text-ink">Seasonal Demand vs Supply</h3>
            <p className="text-xs text-dim mt-0.5">12-month rental market cycle (index, 100 = peak)</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[10px] text-mut">
              <span className="w-2.5 h-2.5 rounded-full bg-grn"/>Demand
            </span>
            <span className="flex items-center gap-1.5 text-[10px] text-mut">
              <span className="w-2.5 h-2.5 rounded-full bg-sky"/>Supply
            </span>
          </div>
        </div>
        <div className="panel-bd">
          <div className="h-48">
            <svg width="100%" height="100%" viewBox="0 0 600 180" preserveAspectRatio="none">
              {/* Grid */}
              {[0, 1, 2, 3, 4].map((i) => (
                <line key={i} x1="0" y1={i * 45} x2="600" y2={i * 45} stroke="#1d2b3a" strokeWidth="0.5"/>
              ))}
              {/* Supply area */}
              <path
                d={`M0 ${180 - seasonalData[0].supply * 1.5} ${seasonalData.map((d, i) => `L${i * 55} ${180 - d.supply * 1.5}`).join(" ")} L600 180 L0 180 Z`}
                fill="rgba(76,195,247,0.08)"
              />
              {/* Supply line */}
              <path
                d={`M0 ${180 - seasonalData[0].supply * 1.5} ${seasonalData.map((d, i) => `L${i * 55} ${180 - d.supply * 1.5}`).join(" ")}`}
                stroke="#4cc3f7" strokeWidth="2" fill="none" className="draw-line" style={{ "--dash": 600 } as React.CSSProperties}
              />
              {/* Demand area */}
              <path
                d={`M0 ${180 - seasonalData[0].demand * 1.5} ${seasonalData.map((d, i) => `L${i * 55} ${180 - d.demand * 1.5}`).join(" ")} L600 180 L0 180 Z`}
                fill="rgba(62,207,142,0.08)"
              />
              {/* Demand line */}
              <path
                d={`M0 ${180 - seasonalData[0].demand * 1.5} ${seasonalData.map((d, i) => `L${i * 55} ${180 - d.demand * 1.5}`).join(" ")}`}
                stroke="#3ecf8e" strokeWidth="2" fill="none" className="draw-line" style={{ "--dash": 600 } as React.CSSProperties}
              />
            </svg>
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-dim">
            {seasonalData.map((d) => (
              <span key={d.month}>{d.month}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Trending Keywords */}
      <div className="panel">
        <div className="panel-hd">
          <div>
            <h3 className="text-sm font-semibold text-ink">Trending Search Keywords</h3>
            <p className="text-xs text-dim mt-0.5">Fastest growing rental search terms (last 30 days)</p>
          </div>
          <span className="chip">
            <span className="dt dt-ai">AI</span>
            Detected
          </span>
        </div>
        <div className="panel-bd">
          <table className="tbl">
            <thead>
              <tr>
                <th>#</th>
                <th>Keyword</th>
                <th>Volume</th>
                <th>Growth</th>
                <th>Heat</th>
              </tr>
            </thead>
            <tbody>
              {trendingKeywords.map((kw, i) => (
                <tr key={i}>
                  <td className="font-mono text-dim text-xs">{i + 1}</td>
                  <td className="font-medium text-ink text-xs">{kw.kw}</td>
                  <td className="mono text-xs text-mut">{kw.vol}</td>
                  <td>
                    <span className="text-xs font-bold text-grn">{kw.growth}</span>
                  </td>
                  <td>
                    <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase ${
                      kw.heat === "hot" ? "text-ros" : kw.heat === "warm" ? "text-amb" : "text-sky"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        kw.heat === "hot" ? "bg-ros" : kw.heat === "warm" ? "bg-amb" : "bg-sky"
                      }`}/>
                      {kw.heat}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* City Detail Drawer */}
      {selectedCity && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 anim-in"
            onClick={() => setSelectedCity(null)}
          />
          
          {/* Drawer */}
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-2xl bg-bg1 border-l border-line z-50 overflow-y-auto anim-in shadow-2xl">
            {/* Header */}
            <div className="sticky top-0 bg-bg1/95 backdrop-blur-md border-b border-line px-6 py-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-grn/15 border border-grn/30 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="text-grn">
                    <path d="M8 1L2 6v8h5V10h2v4h5V6L8 1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none"/>
                  </svg>
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-ink">{selectedCity.city}</h2>
                  <p className="text-xs text-mut">Market Intelligence Report</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedCity(null)}
                className="btn btn-ghost !p-2"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Tabs */}
            <div className="border-b border-line px-6">
              <div className="flex gap-1">
                {[
                  { id: "overview", label: "Overview" },
                  { id: "localities", label: "Localities" },
                  { id: "demographics", label: "Demographics" },
                  { id: "keywords", label: "Keywords" },
                  { id: "opportunities", label: "Opportunities" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-4 py-2.5 text-xs font-semibold transition-colors border-b-2 ${
                      activeTab === tab.id
                        ? "text-grn border-grn"
                        : "text-mut border-transparent hover:text-ink"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {activeTab === "overview" && (
                <div className="space-y-5 anim-in">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-lg bg-panel2/50 border border-line/50">
                      <span className="text-[10px] text-dim uppercase tracking-wider font-semibold">Avg Rent</span>
                      <p className="font-display text-2xl font-bold text-ink mt-1">{selectedCity.avgRent}</p>
                      <span className="text-xs text-grn font-semibold">{selectedCity.change}</span>
                    </div>
                    <div className="p-4 rounded-lg bg-panel2/50 border border-line/50">
                      <span className="text-[10px] text-dim uppercase tracking-wider font-semibold">Median Rent</span>
                      <p className="font-display text-2xl font-bold text-ink mt-1">{selectedCity.medianRent}</p>
                      <span className="text-xs text-mut">50th percentile</span>
                    </div>
                    <div className="p-4 rounded-lg bg-panel2/50 border border-line/50">
                      <span className="text-[10px] text-dim uppercase tracking-wider font-semibold">Demand Index</span>
                      <p className="font-display text-2xl font-bold text-grn mt-1">{selectedCity.demand}</p>
                      <div className="w-full h-1.5 rounded-full bg-panel2 mt-2 overflow-hidden">
                        <div className="h-full bg-grn rounded-full" style={{ width: `${selectedCity.demand}%` }}/>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-panel2/50 border border-line/50">
                      <span className="text-[10px] text-dim uppercase tracking-wider font-semibold">Supply Index</span>
                      <p className="font-display text-2xl font-bold text-sky mt-1">{selectedCity.supply}</p>
                      <div className="w-full h-1.5 rounded-full bg-panel2 mt-2 overflow-hidden">
                        <div className="h-full bg-sky rounded-full" style={{ width: `${selectedCity.supply}%` }}/>
                      </div>
                    </div>
                  </div>

                  {/* Rent Trend Chart */}
                  <div className="panel p-4">
                    <h4 className="text-xs font-semibold text-ink mb-3">Rent Trend (Last 6 Months)</h4>
                    <div className="h-32">
                      <svg width="100%" height="100%" viewBox="0 0 300 120" preserveAspectRatio="none">
                        {[0, 1, 2, 3].map((i) => (
                          <line key={i} x1="0" y1={i * 40} x2="300" y2={i * 40} stroke="#1d2b3a" strokeWidth="0.5"/>
                        ))}
                        <path
                          d={`M0 ${120 - (selectedCity.rentTrend[0].rent - 10000) / 200} ${selectedCity.rentTrend.map((d, i) => `L${i * 60} ${120 - (d.rent - 10000) / 200}`).join(" ")}`}
                          stroke="#3ecf8e"
                          strokeWidth="2"
                          fill="none"
                          className="draw-line"
                          style={{ "--dash": 300 } as React.CSSProperties}
                        />
                        {selectedCity.rentTrend.map((d, i) => (
                          <circle key={i} cx={i * 60} cy={120 - (d.rent - 10000) / 200} r="3" fill="#3ecf8e" stroke="#0c1218" strokeWidth="2"/>
                        ))}
                      </svg>
                    </div>
                    <div className="flex justify-between mt-2 text-[10px] text-dim">
                      {selectedCity.rentTrend.map((d) => (
                        <span key={d.month}>{d.month}</span>
                      ))}
                    </div>
                  </div>

                  {/* Property Type Breakdown */}
                  <div className="panel p-4">
                    <h4 className="text-xs font-semibold text-ink mb-3">Property Type Breakdown</h4>
                    <div className="space-y-2">
                      {selectedCity.propertyTypes.map((pt, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-20 text-xs text-mut">{pt.type}</div>
                          <div className="flex-1 h-2 rounded-full bg-panel2 overflow-hidden">
                            <div className="h-full bg-grn rounded-full" style={{ width: `${pt.percentage}%` }}/>
                          </div>
                          <span className="text-xs font-mono font-bold text-ink w-10 text-right">{pt.percentage}%</span>
                          <span className="text-xs text-mut w-20 text-right">{pt.avgRent}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "localities" && (
                <div className="space-y-4 anim-in">
                  <div className="panel">
                    <div className="panel-hd">
                      <div>
                        <h3 className="text-sm font-semibold text-ink">Top Localities</h3>
                        <p className="text-xs text-dim mt-0.5">Most popular rental areas in {selectedCity.city}</p>
                      </div>
                    </div>
                    <div className="panel-bd">
                      <table className="tbl">
                        <thead>
                          <tr>
                            <th>Locality</th>
                            <th>Avg Rent</th>
                            <th>Demand</th>
                            <th>Supply</th>
                            <th>Gap</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedCity.topLocalities.map((loc, i) => (
                            <tr key={i}>
                              <td className="font-medium text-ink text-xs">{loc.name}</td>
                              <td className="mono text-xs text-mut">{loc.avgRent}</td>
                              <td>
                                <div className="flex items-center gap-2">
                                  <div className="w-16 h-1.5 rounded-full bg-panel2 overflow-hidden">
                                    <div className="h-full bg-grn rounded-full" style={{ width: `${loc.demand}%` }}/>
                                  </div>
                                  <span className="text-xs font-mono text-grn">{loc.demand}</span>
                                </div>
                              </td>
                              <td>
                                <div className="flex items-center gap-2">
                                  <div className="w-16 h-1.5 rounded-full bg-panel2 overflow-hidden">
                                    <div className="h-full bg-sky rounded-full" style={{ width: `${loc.supply}%` }}/>
                                  </div>
                                  <span className="text-xs font-mono text-sky">{loc.supply}</span>
                                </div>
                              </td>
                              <td>
                                <span className={`text-xs font-semibold ${
                                  loc.demand > loc.supply ? "text-ros" : "text-grn"
                                }`}>
                                  {loc.demand > loc.supply ? `+${loc.demand - loc.supply}` : `${loc.demand - loc.supply}`}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "demographics" && (
                <div className="space-y-4 anim-in">
                  {/* Age Distribution */}
                  <div className="panel p-4">
                    <h4 className="text-xs font-semibold text-ink mb-3">Age Distribution</h4>
                    <div className="space-y-2">
                      {selectedCity.demographics.ageGroups.map((age, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-16 text-xs text-mut">{age.range}</div>
                          <div className="flex-1 h-2 rounded-full bg-panel2 overflow-hidden">
                            <div className="h-full bg-grn rounded-full" style={{ width: `${age.percentage}%` }}/>
                          </div>
                          <span className="text-xs font-mono font-bold text-ink w-10 text-right">{age.percentage}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Professions */}
                  <div className="panel p-4">
                    <h4 className="text-xs font-semibold text-ink mb-3">Top Professions</h4>
                    <div className="space-y-2">
                      {selectedCity.demographics.professions.map((prof, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="flex-1 text-xs text-mut">{prof.profession}</div>
                          <div className="w-32 h-2 rounded-full bg-panel2 overflow-hidden">
                            <div className="h-full bg-sky rounded-full" style={{ width: `${prof.percentage}%` }}/>
                          </div>
                          <span className="text-xs font-mono font-bold text-ink w-10 text-right">{prof.percentage}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "keywords" && (
                <div className="space-y-4 anim-in">
                  <div className="panel">
                    <div className="panel-hd">
                      <div>
                        <h3 className="text-sm font-semibold text-ink">Top Keywords</h3>
                        <p className="text-xs text-dim mt-0.5">Fastest growing rental search terms in {selectedCity.city}</p>
                      </div>
                      <span className="chip">
                        <span className="dt dt-ai">AI</span>
                        Trending
                      </span>
                    </div>
                    <div className="panel-bd">
                      <table className="tbl">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Keyword</th>
                            <th>Volume</th>
                            <th>Growth</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedCity.topKeywords.map((kw, i) => (
                            <tr key={i}>
                              <td className="font-mono text-dim text-xs">{i + 1}</td>
                              <td className="font-medium text-ink text-xs">{kw.keyword}</td>
                              <td className="mono text-xs text-mut">{kw.volume}</td>
                              <td>
                                <span className="text-xs font-bold text-grn">{kw.growth}</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "opportunities" && (
                <div className="space-y-4 anim-in">
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-grn/5 border border-grn/20">
                    <span className="dt dt-ai">AI</span>
                    <span className="text-xs text-mut">Market opportunities identified by AI based on demand-supply gaps and trends</span>
                  </div>

                  <div className="space-y-3">
                    {selectedCity.opportunities.map((opp, i) => (
                      <div key={i} className="p-4 rounded-lg bg-panel2/50 border border-line/50 hover:border-grn/30 transition-colors">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-sm font-semibold text-ink">{opp.title}</h4>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            opp.potential === "Very High" ? "bg-grn/10 text-grn border border-grn/30" :
                            opp.potential === "High" ? "bg-amb/10 text-amb border border-amb/30" :
                            "bg-sky/10 text-sky border border-sky/30"
                          }`}>
                            {opp.potential} Potential
                          </span>
                        </div>
                        <p className="text-xs text-mut leading-relaxed">{opp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
