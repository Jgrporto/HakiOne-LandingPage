<<<<<<< HEAD
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
=======
const footerLinks = {
  "O que é Haki One?": ["Panorama da Haki One", "Funil de vendas CRM", "Inbox de chats", "Salesbot"],
  "Canais": ["WhatsApp CRM", "Instagram CRM", "TikTok CRM", "Todos os canais"],
  "Parceiros": ["Encontre um parceiro", "Torne-se um parceiro", "Solicitar ajuda"],
  "Por que a Haki One?": ["Preços", "Avaliações de clientes", "Casos de clientes"],
  "Apps integrados": ["Apps em destaque", "Messengers & SMS", "Todas as integrações"],
  "Ferramentas grátis": ["Gerador de link do WhatsApp", "Gerador de QR code do WhatsApp", "Calculadora de preços do WhatsApp"],
  "Recursos": ["Agendar demo", "Blog da Haki One", "Central de Recursos", "Suporte", "API & SDK"],
  "Guias": ["WhatsApp CRM", "CRM para TikTok", "Instagram CRM"],
  "Contate-nos": ["Fale no WhatsApp", "Fale no Facebook", "Ligue: +55 11 0000-0000", "Envie-nos um email"],
  "Legal": ["Termos", "Segurança", "Política de privacidade", "Política de reembolso"],
};

export default function Footer() {
  return (
    <footer style={{background: "#1A2229"}}>
      {/* CTA Banner */}
      <div className="text-center px-4 py-20 border-b border-white/10">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
          Feche mais negócios<br/>com automação de IA
        </h2>
        <p className="text-gray-400 text-sm mb-8">
          Experimente a Haki One grátis ou veja em uma demonstração como podemos fazer o seu negócio crescer.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-7 py-3 rounded-full text-white font-semibold text-sm flex items-center gap-2" style={{background: "linear-gradient(90deg, #22C55E, #16a34a)"}}>
            Grátis por 14 dias ✦
          </button>
          <button className="px-7 py-3 rounded-full font-semibold text-sm border border-white/30 text-white hover:bg-white/10 transition-colors">
            Solicitar demonstração
          </button>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {Object.entries(footerLinks).map(([section, items]) => (
            <div key={section}>
              <p className="text-xs font-bold uppercase tracking-wider mb-4 text-white/50">{section}</p>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md flex items-center justify-center font-black text-white text-sm" style={{background: "#22C55E"}}>H</div>
            <span className="font-black text-white">Haki One</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="border border-white/20 rounded-lg px-4 py-2 text-xs text-white/60">∞∞ Meta Business Partner</div>
            <div className="border border-white/20 rounded-lg px-4 py-2 text-xs text-white/60">✓ IA Verificado</div>
          </div>
          <p className="text-xs text-gray-500">© 2026 Haki One. Todos os direitos reservados.</p>
>>>>>>> 6ab3a3e2381b7b82765e283b2b0aad20e976b492
        </div>
      </div>
    </footer>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 6ab3a3e2381b7b82765e283b2b0aad20e976b492
