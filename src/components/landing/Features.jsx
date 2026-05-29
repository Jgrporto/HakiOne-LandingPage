import { Bot, CalendarClock, HandCoins, MessageSquareText } from "lucide-react";

const modules = [
  {
    title: "Follow-up automático",
    text: "Nunca mais deixe um lead esfriar por falta de retorno. Crie acompanhamentos automáticos para manter cada oportunidade em movimento.",
    icon: Bot,
    accent: "#3B82F6",
    bg: "linear-gradient(180deg, rgba(59,130,246,0.08) 0%, rgba(255,255,255,1) 100%)",
  },
  {
    title: "Régua de cobrança automática",
    text: "Organize lembretes, mensagens e etapas de cobrança para reduzir atrasos e manter sua recorrência sob controle.",
    icon: HandCoins,
    accent: "#F59E0B",
    bg: "linear-gradient(180deg, rgba(245,158,11,0.10) 0%, rgba(255,255,255,1) 100%)",
  },
  {
    title: "Rotinas de agendamento",
    text: "Automatize confirmações, lembretes e retornos para transformar conversas em horários marcados sem depender de processos manuais.",
    icon: CalendarClock,
    accent: "#22C55E",
    bg: "linear-gradient(180deg, rgba(34,197,94,0.10) 0%, rgba(255,255,255,1) 100%)",
  },
  {
    title: "Gestão clara de atendimento",
    text: "Tenha visibilidade sobre conversas, responsáveis, status e prioridades para que nada fique perdido no WhatsApp.",
    icon: MessageSquareText,
    accent: "#3B82F6",
    bg: "linear-gradient(180deg, rgba(26,34,41,0.05) 0%, rgba(255,255,255,1) 100%)",
  },
];

export default function Features() {
  return (
    <section id="modulos" className="bg-white px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#3B82F6]">Módulos da operação</p>
          <h2 className="text-4xl font-black leading-tight text-[#1A2229] md:text-5xl">
            Uma <span className="text-[#3B82F6]">plataforma operacional inteligente</span> para o seu{" "}
            <span className="text-[#22C55E]">WhatsApp</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {modules.map((module) => {
            const Icon = module.icon;

            return (
              <div
                key={module.title}
                className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition-transform hover:-translate-y-1"
                style={{ background: module.bg }}
              >
                <div
                  className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ background: `${module.accent}18`, color: module.accent }}
                >
                  <Icon size={22} />
                </div>
                <h3 className="mb-3 text-2xl font-black text-[#1A2229]">{module.title}</h3>
                <p className="max-w-[36ch] text-sm leading-7 text-slate-600">{module.text}</p>

                <div className="mt-8 rounded-2xl border border-white/70 bg-white/85 p-4 backdrop-blur-sm">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Fluxo ativo</span>
                    <span className="rounded-full px-2.5 py-1 text-xs font-semibold" style={{ background: `${module.accent}12`, color: module.accent }}>
                      Haki One
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 rounded-full bg-slate-100">
                      <div className="h-2 rounded-full" style={{ width: "78%", background: module.accent }} />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="rounded-xl bg-slate-50 px-3 py-3 text-xs font-medium text-slate-500">Entrada</div>
                      <div className="rounded-xl bg-slate-50 px-3 py-3 text-xs font-medium text-slate-500">Automação</div>
                      <div className="rounded-xl bg-slate-50 px-3 py-3 text-xs font-medium text-slate-500">Próximo passo</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
