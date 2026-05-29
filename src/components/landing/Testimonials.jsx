<<<<<<< HEAD
export default function Testimonials() {
  return (
    <section id="cta-final" className="bg-white px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[32px] bg-[#1A2229] px-6 py-14 shadow-[0_30px_90px_rgba(15,23,42,0.22)] md:px-12">
          <div className="relative">
            <div className="pointer-events-none absolute -top-16 left-1/3 h-40 w-40 rounded-full bg-[#22C55E]/18 blur-3xl" />
            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[#3B82F6]/16 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#22C55E]">Comece agora</p>
              <h2 className="mb-4 text-4xl font-black leading-tight text-white md:text-5xl">
                Seu WhatsApp não precisa continuar uma bagunça.
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-slate-300">
                Teste a Haki One e veja como organizar atendimentos, automatizar rotinas e recuperar o controle da sua operação.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-full bg-[#22C55E] px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-[0_14px_40px_rgba(34,197,94,0.24)] transition-all hover:-translate-y-0.5 hover:bg-[#16a34a]"
                >
                  Teste Grátis Aqui
                </a>
                <a
                  href="#cliente"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-medium uppercase tracking-[0.08em] text-white transition-colors hover:bg-white/10"
                >
                  Falar com Especialista
                </a>
              </div>
            </div>
          </div>
=======
const stats = [
  { value: "100.000+", label: "Clientes ativos" },
  { value: "100+", label: "Países" },
  { value: "4.6/5", label: "Avaliação G2" },
  { value: "+40%", label: "Conversões em média" },
];

const testimonials = [
  {
    name: "Ana Rodrigues",
    role: "Diretora Comercial, AgênciaMax",
    text: "Sem esse CRM, eu não conseguiria nem pensar em trazer um milhão de reais em vendas. A automação do WhatsApp mudou tudo.",
    avatar: "AR",
    color: "#22C55E",
  },
  {
    name: "Carlos Mendes",
    role: "CEO, InovaVendas",
    text: "Em 30 dias, nossa conversão subiu 40%. A IA trabalha enquanto a equipe dorme. É surreal.",
    avatar: "CM",
    color: "#3B82F6",
  },
  {
    name: "Fernanda Lima",
    role: "Gestora de Marketing, TechBrasil",
    text: "Nunca mais perdemos um lead. O pipeline com IA garante que cada contato seja acompanhado automaticamente.",
    avatar: "FL",
    color: "#F59E0B",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12" style={{color: "#1A2229"}}>
          Confiados por mais de 100.000 clientes
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6 rounded-2xl" style={{background: "#F7F7F7"}}>
              <p className="text-3xl font-black mb-1" style={{color: "#1A2229"}}>{s.value}</p>
              <p className="text-xs text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex mb-4">
                {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400 text-sm">★</span>)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{background: t.color}}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-sm" style={{color: "#1A2229"}}>{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
>>>>>>> 6ab3a3e2381b7b82765e283b2b0aad20e976b492
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 6ab3a3e2381b7b82765e283b2b0aad20e976b492
