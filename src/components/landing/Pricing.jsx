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
