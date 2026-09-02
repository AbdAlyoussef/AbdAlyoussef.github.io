const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education", desktopOnly: true },
  { label: "Experience", href: "#experience", desktopOnly: true },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#11110f]/82 px-4 py-2.5 shadow-[0_8px_36px_rgba(0,0,0,.16)] backdrop-blur-xl sm:px-5"
      >
        <a
          className="rounded-full px-1 py-2 font-mono text-xs font-medium tracking-[0.18em] text-white outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
          href="#top"
          aria-label="Back to top"
        >
          ARA<span className="text-accent">/</span>
        </a>
        <div className="flex items-center gap-0.5 sm:gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              className={`nav-link ${item.desktopOnly ? "hidden lg:inline-flex" : "inline-flex"}`}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
