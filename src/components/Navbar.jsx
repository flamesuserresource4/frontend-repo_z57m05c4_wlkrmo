import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-white font-semibold tracking-tight">
          Albin C.L. | Web Dev & Hosting
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
        <button
          aria-label="Toggle Menu"
          className="md:hidden text-white/90"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu size={22} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-white/90 py-2"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
