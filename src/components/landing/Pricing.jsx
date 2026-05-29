<<<<<<< HEAD
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Essencial",
    description: "Para quem precisa organizar atendimentos e começar a controlar melhor o WhatsApp.",
    items: ["Gestão básica de atendimento", "Etiquetas e organização de conversas", "Mensagens rápidas", "Suporte inicial"],
    cta: "Teste Grátis Aqui",
    featured: false,
  },
  {
    name: "Operacional",
    description: "Para negócios que querem automatizar follow-ups, cobranças e rotinas do dia a dia.",
    items: ["Follow-up automático", "Régua de cobrança", "Rotinas de agendamento", "Dashboard operacional"],
    cta: "Teste Grátis Aqui",
    featured: true,
    badge: "Recomendado",
  },
  {
    name: "Inteligente",
    description: "Para equipes que querem usar IA, automações avançadas e acompanhamento mais estratégico.",
    items: ["Kiki IA", "Chatbots personalizados", "Dashboards personalizados", "Automações avançadas"],
    cta: "Teste Grátis Aqui",
    featured: false,
  },
  {
    name: "Sob medida",
    description: "Para operações que precisam de implantação personalizada, integrações e processos específicos.",
    items: ["Implantação consultiva", "Fluxos personalizados", "Dashboards sob medida", "Suporte estratégico"],
    cta: "Falar com Especialista",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#3B82F6]">Planos</p>
          <h2 className="mb-4 text-4xl font-black leading-tight text-[#1A2229] md:text-5xl">
            Escolha o plano ideal para organizar sua operação
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            Comece simples e evolua conforme sua equipe, seus atendimentos e suas automações crescem.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative flex h-full flex-col rounded-[28px] border p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
              style={{
                background: plan.featured ? "#1A2229" : "white",
                borderColor: plan.featured ? "#1A2229" : "#e2e8f0",
              }}
            >
              {plan.badge && (
                <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-white/12 px-3 py-1 text-xs font-semibold text-white">
                  <Sparkles size={12} />
                  {plan.badge}
                </span>
              )}

              <h3 className="mb-3 text-2xl font-black" style={{ color: plan.featured ? "white" : "#1A2229" }}>
                {plan.name}
              </h3>
              <p className="mb-6 text-sm leading-7" style={{ color: plan.featured ? "#cbd5e1" : "#64748b" }}>
                {plan.description}
              </p>

              <div className="mb-6 rounded-2xl border px-4 py-4" style={{ borderColor: plan.featured ? "rgba(255,255,255,0.08)" : "#e2e8f0", background: plan.featured ? "rgba(255,255,255,0.04)" : "#F7F7F7" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: plan.featured ? "#86efac" : "#3B82F6" }}>
                  Estrutura incluída
                </p>
              </div>

              <div className="mb-8 space-y-3">
                {plan.items.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div
                      className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full"
                      style={{ background: plan.featured ? "rgba(34,197,94,0.16)" : "rgba(34,197,94,0.10)" }}
                    >
                      <Check size={13} className="text-[#22C55E]" />
                    </div>
                    <span className="text-sm leading-7" style={{ color: plan.featured ? "#e2e8f0" : "#475569" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={plan.cta === "Falar com Especialista" ? "#cta-final" : "#cta-final"}
                className="mt-auto inline-flex items-center justify-center rounded-full px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.06em] transition-all"
                style={
                  plan.featured
                    ? {
                        background: "#22C55E",
                        color: "white",
                        boxShadow: "0 14px 40px rgba(34,197,94,0.22)",
                      }
                    : {
                        background: "#1A2229",
                        color: "white",
                      }
                }
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
=======
import { useState } from "react";

const periods = ["6 meses", "9 meses", "1 ano", "2 anos"];

const plans = [
  {
    name: "Básico",
    price: 76,
    desc: "Para pequenas equipes - acesse os recursos essenciais de IA.",
    highlight: false,
    popular: false,
    color: "#F59E0B",
    bg: "#fff9f0",
  },
  {
    name: "Avançado",
    price: 127,
    desc: "Para equipes em crescimento - automatize chats com IA.",
    highlight: false,
    popular: false,
    color: "#22C55E",
    bg: "#f0fff4",
  },
  {
    name: "Pro",
    price: 228,
    desc: "Para equipes experientes - cresça com automação de IA.",
    highlight: true,
    popular: true,
    color: "#3B82F6",
    bg: "#1A2229",
  },
  {
    name: "Empresarial",
    price: null,
    desc: "CRM de IA personalizado com segurança, controle e suporte.",
    highlight: false,
    popular: false,
    color: "#F59E0B",
    bg: "#fff9f0",
  },
];

const discounts = { "6 meses": 1, "9 meses": 0.92, "1 ano": 0.85, "2 anos": 0.78 };

export default function Pricing() {
  const [period, setPeriod] = useState("6 meses");

  return (
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12" style={{color: "#1A2229"}}>
          Passe de sobrecarregado<br/>a sucesso 👻 absoluto
        </h2>

        {/* Period selector */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex bg-gray-100 p-1 rounded-full gap-1">
            {periods.map(p => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
                style={period === p
                  ? { background: "#22C55E", color: "white" }
                  : { color: "#6b7280" }
                }
              >
                {p}
              </button>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-1 text-sm border border-gray-200 rounded-full px-4 py-1.5 text-gray-600">
            R$ BRL ▾
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-3xl p-6 flex flex-col relative"
              style={{background: plan.highlight ? plan.bg : plan.bg, border: plan.highlight ? "none" : "1px solid #e5e7eb"}}
            >
              {plan.popular && (
                <span className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-0.5 rounded-full" style={{background: "#e8e4ff", color: "#7c3aed"}}>
                  mais popular
                </span>
              )}
              <h3 className="text-lg font-black mb-2" style={{color: plan.highlight ? "white" : "#1A2229"}}>
                {plan.name}
              </h3>
              <p className="text-xs mb-5 leading-relaxed" style={{color: plan.highlight ? "#9ca3af" : "#6b7280"}}>
                {plan.desc}
              </p>

              {plan.price ? (
                <div className="mb-1">
                  <span className="text-3xl font-black" style={{color: plan.highlight ? "white" : "#1A2229"}}>
                    {Math.round(plan.price * discounts[period])}
                  </span>
                  <span className="text-xs ml-1" style={{color: plan.highlight ? "#9ca3af" : "#9ca3af"}}> BRL</span>
                  <p className="text-xs mt-0.5" style={{color: plan.highlight ? "#9ca3af" : "#9ca3af"}}>por usuário/mês</p>
                </div>
              ) : (
                <div className="mb-1">
                  <p className="text-2xl font-black mb-0.5" style={{color: "#1A2229"}}>Sob medida</p>
                  <p className="text-xs text-gray-400">Conforme configuração</p>
                </div>
              )}

              {plan.price && (
                <a href="#" className="text-xs underline mb-6 block" style={{color: plan.color}}>
                  Qual é o meu custo total?
                </a>
              )}
              {!plan.price && (
                <a href="#" className="text-xs underline mb-6 block" style={{color: plan.color}}>
                  Como funciona?
                </a>
              )}

              <button
                className="w-full py-2.5 rounded-xl font-semibold text-sm mt-auto transition-opacity hover:opacity-90"
                style={plan.highlight
                  ? { background: "white", color: "#1A2229" }
                  : { background: "#1A2229", color: "white" }
                }
              >
                Teste grátis
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8 max-w-2xl mx-auto">
          Escolha um plano com base no nível de automação e suporte de IA que sua equipe precisa, sendo escalável conforme seu negócio cresce.
        </p>
        <div className="text-center mt-3">
          <a href="#" className="text-sm underline" style={{color: "#3B82F6"}}>Veja a comparação detalhada dos planos</a>
        </div>
      </div>
    </section>
  );
}
>>>>>>> 6ab3a3e2381b7b82765e283b2b0aad20e976b492
