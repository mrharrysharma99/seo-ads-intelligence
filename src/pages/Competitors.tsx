export default function Competitors() {
  const competitors = [
    { name: "NoBroker", domain: "nobroker.in", dr: 72, keywords: 12450, traffic: "2.1M", trend: "up", overlap: 34 },
    { name: "Housing.com", domain: "housing.com", dr: 78, keywords: 18200, traffic: "3.8M", trend: "up", overlap: 28 },
    { name: "MagicBricks", domain: "magicbricks.com", dr: 81, keywords: 24300, traffic: "5.2M", trend: "stable", overlap: 41 },
    { name: "99acres", domain: "99acres.com", dr: 79, keywords: 21800, traffic: "4.5M", trend: "down", overlap: 37 },
    { name: "Zolo Stays", domain: "zolostays.com", dr: 54, keywords: 4200, traffic: "680K", trend: "up", overlap: 18 },
    { name: "Nestaway", domain: "nestaway.com", dr: 48, keywords: 3100, traffic: "420K", trend: "down", overlap: 12 },
  ];

  const sharedKeywords = [
    { kw: "2bhk flat for rent", ourPos: 3, compPos: 2, comp: "MagicBricks" },
    { kw: "pg accommodation near me", ourPos: 5, compPos: 1, comp: "NoBroker" },
    { kw: "flat without brokerage", ourPos: 4, compPos: 3, comp: "Housing.com" },
    { kw: "house for rent in bangalore", ourPos: 7, compPos: 4, comp: "99acres" },
    { kw: "1bhk rent in hyderabad", ourPos: 5, compPos: 6, comp: "NoBroker" },
  ];

  return (
    <div className="space-y-6 reveal-stagger">
      {/* Header */}
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

      {/* Competitor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {competitors.map((comp) => (
          <div key={comp.domain} className="panel p-4 hover:border-line2 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-sm font-semibold text-ink">{comp.name}</h3>
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
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-dim font-semibold">Keyword Overlap</span>
              <div className="flex-1 h-1.5 rounded-full bg-panel2 overflow-hidden">
                <div className="h-full rounded-full bg-sky" style={{ width: `${comp.overlap}%` }}/>
              </div>
              <span className="text-xs font-mono font-bold text-sky">{comp.overlap}%</span>
            </div>
          </div>
        ))}
      </div>

      {/* Shared Keywords */}
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
              {sharedKeywords.map((kw, i) => (
                <tr key={i}>
                  <td className="font-medium text-ink">{kw.kw}</td>
                  <td>
                    <span className="font-display font-bold text-grn">{kw.ourPos}</span>
                  </td>
                  <td>
                    <span className="font-display font-bold text-ros">{kw.compPos}</span>
                  </td>
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
    </div>
  );
}
