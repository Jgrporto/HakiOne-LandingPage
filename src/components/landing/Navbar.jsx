import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Módulos", href: "#modulos" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6 md:gap-10">
          <a href="/" className="flex items-center">
            <img src="/hakione_logo_transparent.png" alt="Haki One" className="h-10 w-auto object-contain" />
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[15px] font-medium text-[#1A2229] transition-colors hover:text-[#22C55E]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#cta-final"
            className="rounded-full bg-[#22C55E] px-6 py-3 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(34,197,94,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#16a34a]"
          >
            Iniciar Teste
          </a>
          <a
            href="#cliente"
            className="rounded-full border border-slate-200 bg-white px-5 py-3 text-[15px] font-medium text-[#1A2229] transition-colors hover:border-slate-300 hover:bg-slate-50"
          >
            Já sou Cliente
          </a>
        </div>

        <button className="text-[#1A2229] md:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-5 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-[#1A2229]">
                {link.label}
              </a>
            ))}
            <a
              href="#cta-final"
              className="mt-2 rounded-full bg-[#22C55E] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Iniciar Teste
            </a>
            <a
              href="#cliente"
              className="rounded-full border border-slate-200 px-5 py-3 text-center text-sm font-medium text-[#1A2229]"
            >
              Já sou Cliente
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
