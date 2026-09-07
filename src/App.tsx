import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import SEOAudit from "./pages/SEOAudit";
import Competitors from "./pages/Competitors";
import Campaigns from "./pages/Campaigns";
import Trends from "./pages/Trends";

export type Page = "dashboard" | "seo" | "competitors" | "campaigns" | "trends";

export default function App() {
  const [page, setPage] = useState<Page>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderPage = () => {
    switch (page) {
      case "dashboard":
        return <Dashboard />;
      case "seo":
        return <SEOAudit />;
      case "competitors":
        return <Competitors />;
      case "campaigns":
        return <Campaigns />;
      case "trends":
        return <Trends />;
      default:
        return <Dashboard />;
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
            <button className="btn btn-soft !text-xs">
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
    </div>
  );
}
