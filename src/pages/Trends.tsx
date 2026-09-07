export default function Trends() {
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
          <div key={city.city} className="panel p-4 hover:border-line2 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold text-ink">{city.city}</h3>
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
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-dim font-semibold w-12">Demand</span>
              <div className="flex-1 h-2 rounded-full bg-panel2 overflow-hidden flex">
                <div className="h-full bg-grn rounded-l-full" style={{ width: `${city.demand}%` }}/>
              </div>
              <span className="text-[9px] text-dim font-semibold w-12 text-right">Supply</span>
              <div className="flex-1 h-2 rounded-full bg-panel2 overflow-hidden flex">
                <div className="h-full bg-sky rounded-l-full" style={{ width: `${city.supply}%` }}/>
              </div>
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
    </div>
  );
}
