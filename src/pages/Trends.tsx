import { useState, useEffect } from "react";
import { useAudit } from "../context/AuditContext";

export default function Trends() {
  const { websiteType, targetUrl } = useAudit();
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [cities, setCities] = useState<any[]>([]);
  const [trendingKeywords, setTrendingKeywords] = useState<any[]>([]);

  useEffect(() => {
    const generateTrendsData = () => {
      const urlHash = targetUrl.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const baseMultiplier = 0.7 + (urlHash % 60) / 100;

      const trendsData: Record<string, { cities: any[]; keywords: any[] }> = {
        'real-estate': {
          cities: [
            { name: "Bangalore", demand: 92, supply: 78, avgRent: "₹18,500", change: "+5.2%", hot: true },
            { name: "Hyderabad", demand: 85, supply: 82, avgRent: "₹14,200", change: "+3.8%", hot: true },
            { name: "Pune", demand: 78, supply: 88, avgRent: "₹13,800", change: "+2.1%", hot: false },
            { name: "Chennai", demand: 72, supply: 85, avgRent: "₹12,500", change: "+1.4%", hot: false },
            { name: "Mumbai", demand: 95, supply: 45, avgRent: "₹32,000", change: "+7.8%", hot: true },
            { name: "Delhi NCR", demand: 88, supply: 62, avgRent: "₹16,800", change: "+4.5%", hot: true },
          ],
          keywords: [
            { kw: "flat for rent in bangalore without brokerage", vol: "33.1K", growth: "+142%", heat: "hot" },
            { kw: "co-living spaces in hyderabad", vol: "18.2K", growth: "+89%", heat: "hot" },
            { kw: "pet friendly rental apartments", vol: "12.4K", growth: "+67%", heat: "warm" },
            { kw: "furnished flat near metro station", vol: "9.8K", growth: "+54%", heat: "warm" },
          ],
        },
        'technology': {
          cities: [
            { name: "Bangalore", demand: 95, supply: 72, avgRent: "₹22,000", change: "+8.5%", hot: true },
            { name: "Hyderabad", demand: 88, supply: 78, avgRent: "₹18,500", change: "+6.2%", hot: true },
            { name: "Pune", demand: 82, supply: 85, avgRent: "₹16,800", change: "+4.8%", hot: false },
            { name: "Chennai", demand: 78, supply: 82, avgRent: "₹15,200", change: "+3.5%", hot: false },
            { name: "Mumbai", demand: 92, supply: 55, avgRent: "₹28,500", change: "+9.2%", hot: true },
            { name: "Delhi NCR", demand: 85, supply: 68, avgRent: "₹19,800", change: "+5.8%", hot: true },
          ],
          keywords: [
            { kw: "software development services", vol: "38.5K", growth: "+128%", heat: "hot" },
            { kw: "custom software solutions", vol: "28.3K", growth: "+95%", heat: "hot" },
            { kw: "enterprise software development", vol: "22.7K", growth: "+72%", heat: "warm" },
            { kw: "web application development", vol: "19.2K", growth: "+58%", heat: "warm" },
          ],
        },
        'ecommerce': {
          cities: [
            { name: "Mumbai", demand: 98, supply: 42, avgRent: "₹35,000", change: "+12.5%", hot: true },
            { name: "Delhi NCR", demand: 92, supply: 58, avgRent: "₹28,500", change: "+9.8%", hot: true },
            { name: "Bangalore", demand: 88, supply: 72, avgRent: "₹24,800", change: "+7.2%", hot: true },
            { name: "Chennai", demand: 82, supply: 78, avgRent: "₹19,500", change: "+5.5%", hot: false },
            { name: "Hyderabad", demand: 78, supply: 82, avgRent: "₹17,200", change: "+4.2%", hot: false },
            { name: "Pune", demand: 75, supply: 85, avgRent: "₹15,800", change: "+3.8%", hot: false },
          ],
          keywords: [
            { kw: "buy online shopping", vol: "82.3K", growth: "+165%", heat: "hot" },
            { kw: "best deals online", vol: "65.7K", growth: "+128%", heat: "hot" },
            { kw: "discount products online", vol: "48.2K", growth: "+95%", heat: "warm" },
            { kw: "online shopping india", vol: "42.1K", growth: "+78%", heat: "warm" },
          ],
        },
        'food': {
          cities: [
            { name: "Mumbai", demand: 95, supply: 48, avgRent: "₹32,000", change: "+10.2%", hot: true },
            { name: "Delhi NCR", demand: 90, supply: 62, avgRent: "₹26,500", change: "+8.5%", hot: true },
            { name: "Bangalore", demand: 88, supply: 75, avgRent: "₹22,800", change: "+6.8%", hot: true },
            { name: "Chennai", demand: 82, supply: 80, avgRent: "₹18,500", change: "+5.2%", hot: false },
            { name: "Hyderabad", demand: 78, supply: 85, avgRent: "₹16,200", change: "+4.5%", hot: false },
            { name: "Pune", demand: 75, supply: 88, avgRent: "₹14,800", change: "+3.8%", hot: false },
          ],
          keywords: [
            { kw: "restaurant near me", vol: "95.2K", growth: "+142%", heat: "hot" },
            { kw: "food delivery online", vol: "72.4K", growth: "+118%", heat: "hot" },
            { kw: "best cafe in city", vol: "38.7K", growth: "+85%", heat: "warm" },
            { kw: "online food order", vol: "32.1K", growth: "+68%", heat: "warm" },
          ],
        },
        'general': {
          cities: [
            { name: "Mumbai", demand: 90, supply: 55, avgRent: "₹28,500", change: "+8.2%", hot: true },
            { name: "Delhi NCR", demand: 85, supply: 65, avgRent: "₹22,800", change: "+6.5%", hot: true },
            { name: "Bangalore", demand: 82, supply: 78, avgRent: "₹19,500", change: "+5.2%", hot: false },
            { name: "Chennai", demand: 78, supply: 82, avgRent: "₹16,200", change: "+4.2%", hot: false },
            { name: "Hyderabad", demand: 75, supply: 85, avgRent: "₹14,800", change: "+3.5%", hot: false },
            { name: "Pune", demand: 72, supply: 88, avgRent: "₹13,500", change: "+2.8%", hot: false },
          ],
          keywords: [
            { kw: "services near me", vol: "58.3K", growth: "+125%", heat: "hot" },
            { kw: "best company reviews", vol: "42.7K", growth: "+95%", heat: "hot" },
            { kw: "professional services", vol: "35.2K", growth: "+72%", heat: "warm" },
            { kw: "local business directory", vol: "28.6K", growth: "+58%", heat: "warm" },
          ],
        },
      };

      const data = trendsData[websiteType] || trendsData['general'];
      setCities(data.cities);
      setTrendingKeywords(data.keywords);
    };

    generateTrendsData();
  }, [websiteType, targetUrl]);

  return (
    <div className="space-y-6 reveal-stagger">
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

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {cities.map((city) => (
          <div 
            key={city.name} 
            className="panel p-4 hover:border-grn/40 transition-all cursor-pointer group"
            onClick={() => setSelectedCity(city.name)}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold text-ink group-hover:text-grn transition-colors">{city.name}</h3>
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
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[9px] text-dim font-semibold w-12">Demand</span>
              <div className="flex-1 h-2 rounded-full bg-panel2 overflow-hidden">
                <div className="h-full bg-grn rounded-l-full" style={{ width: `${city.demand}%` }}/>
              </div>
              <span className="text-[9px] text-dim font-semibold w-12 text-right">Supply</span>
              <div className="flex-1 h-2 rounded-full bg-panel2 overflow-hidden">
                <div className="h-full bg-sky rounded-l-full" style={{ width: `${city.supply}%` }}/>
              </div>
            </div>
            <div className="mt-3 text-[10px] text-grn font-semibold opacity-0 group-hover:opacity-100 transition-opacity text-right">
              View Details →
            </div>
          </div>
        ))}
      </div>

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
              {[0, 1, 2, 3, 4].map((i) => (
                <line key={i} x1="0" y1={i * 45} x2="600" y2={i * 45} stroke="#1d2b3a" strokeWidth="0.5"/>
              ))}
              <path
                d="M0 140 Q30 135 60 130 T120 115 T180 100 T240 110 T300 85 T360 70 T420 60 T480 45 T540 50 T600 30"
                stroke="#3ecf8e"
                strokeWidth="2"
                fill="none"
                className="draw-line"
                style={{ "--dash": 800 } as React.CSSProperties}
              />
              <path
                d="M0 120 Q30 125 60 130 T120 140 T180 135 T240 130 T300 125 T360 120 T420 115 T480 110 T540 105 T600 100"
                stroke="#4cc3f7"
                strokeWidth="2"
                fill="none"
                className="draw-line"
                style={{ "--dash": 800 } as React.CSSProperties}
              />
            </svg>
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-dim">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span>
            <span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span>
            <span>Nov</span><span>Dec</span>
          </div>
        </div>
      </div>

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

      {selectedCity && (
        <div className="fixed inset-0 z-50 flex justify-end" onClick={() => setSelectedCity(null)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"/>
          <div className="relative w-full max-w-3xl bg-bg1 border-l border-line overflow-y-auto anim-in" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-bg1/95 backdrop-blur-md border-b border-line px-6 py-4 flex items-center justify-between z-10">
              <div>
                <h2 className="font-display text-lg font-bold text-ink">{selectedCity}</h2>
                <p className="text-xs text-mut mt-1">Market Intelligence Report</p>
              </div>
              <button onClick={() => setSelectedCity(null)} className="p-2 rounded-lg hover:bg-panel3 transition-colors text-dim hover:text-ink">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-lg bg-panel2/50 border border-line/50">
                  <span className="text-[10px] text-dim uppercase tracking-wider font-semibold">Avg Rent</span>
                  <p className="font-display text-2xl font-bold text-ink mt-1">
                    {cities.find(c => c.name === selectedCity)?.avgRent}
                  </p>
                  <span className="text-xs text-grn font-semibold">
                    {cities.find(c => c.name === selectedCity)?.change}
                  </span>
                </div>
                <div className="p-4 rounded-lg bg-panel2/50 border border-line/50">
                  <span className="text-[10px] text-dim uppercase tracking-wider font-semibold">Market Status</span>
                  <p className="font-display text-2xl font-bold text-grn mt-1">Hot</p>
                  <span className="text-xs text-mut">High demand area</span>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-panel2/30 border border-line/30">
                <p className="text-xs text-mut">Detailed market analysis for {selectedCity}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
