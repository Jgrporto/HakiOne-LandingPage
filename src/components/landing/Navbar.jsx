import { useState } from "react";
<<<<<<< HEAD
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Módulos", href: "#modulos" },
];
=======
import { ChevronDown, Globe, Menu, X } from "lucide-react";
>>>>>>> 6ab3a3e2381b7b82765e283b2b0aad20e976b492

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
<<<<<<< HEAD
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
=======
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Esquerda: Logo + Menu */}
        <div className="flex items-center gap-9">
          <a href="/" className="flex items-center">
            <img
              src="/hakione_logo_transparent.png"
              alt="Haki One"
              className="h-10 w-auto object-contain"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            <button className="flex items-center gap-1.5 text-[15px] font-medium text-[#1A2229] hover:text-[#22C55E] transition-colors">
              Produto <ChevronDown size={16} strokeWidth={2.2} />
            </button>

            <button className="flex items-center gap-1.5 text-[15px] font-medium text-[#1A2229] hover:text-[#22C55E] transition-colors">
              Recursos <ChevronDown size={16} strokeWidth={2.2} />
            </button>

            <a
              href="#pricing"
              className="text-[15px] font-medium text-[#1A2229] hover:text-[#22C55E] transition-colors"
            >
              Preços
            </a>
          </div>
        </div>

        {/* Direita: ações */}
        <div className="hidden md:flex items-center gap-5">
          <button className="flex items-center justify-center text-[#1A2229] hover:text-[#22C55E] transition-colors">
            <Globe size={20} strokeWidth={2} />
          </button>

          <div className="h-8 w-px bg-gray-300" />

          <a
            href="#"
            className="text-[15px] font-medium text-[#1A2229] hover:text-[#22C55E] transition-colors"
          >
            Agendar demo
          </a>

          <button className="text-[15px] font-medium px-8 py-3 rounded-full border border-[#1A2229] text-[#1A2229] hover:bg-[#1A2229] hover:text-white transition-colors">
            Iniciar sessão
          </button>

          <button
            className="text-[15px] font-semibold px-8 py-3 rounded-full text-white transition-transform hover:scale-[1.02]"
            style={{ background: "#1A2229" }}
          >
            Registre-se
          </button>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-[#1A2229]"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
>>>>>>> 6ab3a3e2381b7b82765e283b2b0aad20e976b492
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
<<<<<<< HEAD
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
=======
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-5 flex flex-col gap-4">
          <a href="#" className="text-sm font-medium text-[#1A2229]">
            Produto
          </a>

          <a href="#" className="text-sm font-medium text-[#1A2229]">
            Recursos
          </a>

          <a href="#pricing" className="text-sm font-medium text-[#1A2229]">
            Preços
          </a>

          <a href="#" className="text-sm font-medium text-[#1A2229]">
            Agendar demo
          </a>

          <button className="w-full text-sm font-medium py-3 rounded-full border border-[#1A2229] text-[#1A2229]">
            Iniciar sessão
          </button>

          <button
            className="w-full text-sm font-semibold py-3 rounded-full text-white"
            style={{ background: "#1A2229" }}
          >
            Registre-se
          </button>
>>>>>>> 6ab3a3e2381b7b82765e283b2b0aad20e976b492
        </div>
      )}
    </nav>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 6ab3a3e2381b7b82765e283b2b0aad20e976b492
