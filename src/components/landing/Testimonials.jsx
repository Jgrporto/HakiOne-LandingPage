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
        </div>
      </div>
    </section>
  );
}