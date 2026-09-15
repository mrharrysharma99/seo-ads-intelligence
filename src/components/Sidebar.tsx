import type { Page } from "../App";

interface SidebarProps {
  page: Page;
  setPage: (p: Page) => void;
  open: boolean;
  setOpen: (v: boolean) => void;
}

const navItems: { id: Page; label: string; icon: string }[] = [
  { id: "dashboard", label: "Dashboard", icon: "M3 3h7v7H3V3zm10 0h4v4h-4V3zm0 7h4v7h-4v-7zM3 13h7v4H3v-4z" },
  { id: "seo", label: "SEO Audit", icon: "M8 1a5 5 0 015 5c0 1.5-.7 2.8-1.8 3.7L8 14l-3.2-4.3A5 5 0 018 1z" },
  { id: "competitors", label: "Competitors", icon: "M4 14V8m4 6V4m4 10v-4m4 4V6" },
  { id: "campaigns", label: "Campaigns", icon: "M2 4h12v8H2V4zm3 10h6m-3-2v2" },
  { id: "trends", label: "Market Trends", icon: "M2 12l4-4 3 3 5-7" },
];

export default function Sidebar({ page, setPage, open }: SidebarProps) {
  return (
    <aside
      className={`fixed top-0 left-0 bottom-0 z-40 flex flex-col border-r border-line bg-bg1 transition-all duration-300 ${
        open ? "w-[240px]" : "w-[64px]"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-4 border-b border-line">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-grn to-grn2 flex items-center justify-center flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M3 10l7-7 7 7" stroke="#05130c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 9v7h10V9" stroke="#05130c" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
          </svg>
        </div>
        {open && (
          <div className="anim-in">
            <div className="font-display font-bold text-sm text-ink leading-tight">RentHouse</div>
            <div className="text-[10px] font-semibold text-grn tracking-wider uppercase">Intel</div>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {open && (
          <div className="px-3 mb-2">
            <span className="text-[10px] font-bold tracking-widest uppercase text-dim">Intelligence</span>
          </div>
        )}
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setPage(item.id)}
            className={`nav-item ${page === item.id ? "on" : ""}`}
            title={!open ? item.label : undefined}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
              <path d={item.icon} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            {open && <span>{item.label}</span>}
          </button>
        ))}
      </nav>

      {/* Bottom */}
      {open && (
        <div className="px-3 pb-4 anim-in">
          <div className="panel p-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-grn pulse-dot"></span>
              <span className="text-[11px] font-semibold text-ink">AI Engine Active</span>
            </div>
            <p className="text-[10.5px] text-dim leading-relaxed">
              Monitoring 247 keywords, 12 competitors, and 38 campaigns in real-time.
            </p>
          </div>
        </div>
      )}
    </aside>
  );
}
