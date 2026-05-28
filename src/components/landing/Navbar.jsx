import { useState } from "react";
import { ChevronDown, Globe, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
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
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
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
        </div>
      )}
    </nav>
  );
}