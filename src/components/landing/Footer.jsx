export default function Footer() {
  return (
    <footer id="cliente" className="bg-[#1A2229] px-4 pb-10 pt-6 md:px-6">
      <div className="mx-auto max-w-6xl rounded-[28px] border border-white/10 bg-white/5 px-6 py-8 backdrop-blur-sm">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src="/hakione_logo_transparent.png" alt="Haki One" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-base font-medium text-slate-300">Do caos à ordem.</p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {[
              { label: "Como funciona", href: "#como-funciona" },
              { label: "Módulos", href: "#modulos" },
              { label: "Iniciar teste", href: "#cta-final" },
              { label: "Já sou cliente", href: "#cliente" },
            ].map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-slate-300 transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-xs text-slate-500">© 2026 Haki One. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
