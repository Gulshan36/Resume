import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

const navLinks = [
  { href: "/terms",   label: "Terms & Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/refund",  label: "Refund Policy" },
];

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-[#fdf6e3] font-sans">
      {/* ── Top Bar ── */}
      <header className="bg-[#2c3e50] text-[#c5a059] py-4 px-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-[#c5a059] hover:text-white transition-colors font-serif font-bold text-lg"
        >
          ← {portfolioData.personal.name}
        </Link>
        <span className="text-xs uppercase tracking-widest opacity-60 font-serif hidden sm:block">
          Legal Documents
        </span>
      </header>

      {/* ── Nav Tabs ── */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 flex gap-1 py-2 overflow-x-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-[#2c3e50] hover:text-[#c5a059] transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* ── Content ── */}
      <main className="max-w-4xl mx-auto px-4 py-10">
        {/* Page Header */}
        <div className="mb-10 border-b-2 border-[#c5a059] pb-6">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#2c3e50]">
            {title}
          </h1>
          <p className="mt-2 text-sm text-gray-500 italic">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Legal Content */}
        <div className="prose prose-gray max-w-none
          prose-headings:font-serif prose-headings:text-[#2c3e50]
          prose-h2:text-xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-3 prose-h2:border-l-4 prose-h2:border-[#c5a059] prose-h2:pl-3
          prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
          prose-li:text-gray-700 prose-li:mb-1
          prose-a:text-blue-600 prose-a:underline
          prose-strong:text-gray-800">
          {children}
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-[#2c3e50] text-[#c5a059] mt-16 py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-serif font-bold text-lg">{portfolioData.personal.name}</p>
              <p className="text-xs opacity-60 mt-0.5">{portfolioData.personal.role}</p>
            </div>
            <div className="flex gap-6 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-[#c5a059]/20 text-center text-xs opacity-50">
            © {new Date().getFullYear()} {portfolioData.personal.name} · {portfolioData.personal.email} ·{" "}
            {portfolioData.personal.location}
          </div>
        </div>
      </footer>
    </div>
  );
}
