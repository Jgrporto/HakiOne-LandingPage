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