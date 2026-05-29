<<<<<<< HEAD
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
=======
export default function Features() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-14" style={{color: "#1A2229"}}>
          Cresça 🧸 com um<br/>CRM 🌿 completo
        </h2>

        {/* Bento grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Gestão de chat */}
          <div className="rounded-3xl overflow-hidden flex flex-col" style={{background: "#e8e4ff"}}>
            <div className="p-8 pb-4">
              <h3 className="text-2xl font-black mb-3" style={{color: "#1A2229"}}>Gestão de chat</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Conecte <span className="font-semibold">WhatsApp, Instagram, Messenger, TikTok</span> e muito mais a uma única caixa de entrada com inteligência artificial.
              </p>
              <a href="#" className="text-sm font-semibold flex items-center gap-1" style={{color: "#1A2229"}}>Saiba mais →</a>
            </div>
            <div className="mt-auto overflow-hidden rounded-xl mx-4 mb-0 shadow-lg">
              <img src="https://pcfcdn.kommo.com/images/pages/main/demo-block/en/demo-block-inbox-image.png" alt="Chat" className="w-full"/>
            </div>
          </div>

          {/* Gestão de funil */}
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl overflow-hidden flex flex-col" style={{background: "#f0f7e6"}}>
              <div className="p-8 pb-4">
                <h3 className="text-2xl font-black mb-3" style={{color: "#1A2229"}}>Gestão de funil</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Automatize seu funil com IA para que cada lead continue avançando e cada representante saiba qual é o próximo passo.
                </p>
                <a href="#" className="text-sm font-semibold flex items-center gap-1" style={{color: "#1A2229"}}>Saiba mais →</a>
              </div>
              <div className="overflow-hidden rounded-xl mx-4 mb-0 shadow-lg">
                <img src="https://pcfcdn.kommo.com/images/pages/main/demo-block/en/demo-block-crm-image.png" alt="Pipeline" className="w-full"/>
              </div>
            </div>
          </div>

          {/* Gestão de agendamentos */}
          <div className="rounded-3xl overflow-hidden flex flex-col" style={{background: "#fff8e6"}}>
            <div className="p-8 pb-4">
              <h3 className="text-2xl font-black mb-3" style={{color: "#1A2229"}}>Gestão de agendamentos</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Transforme conversas em reuniões confirmadas com horários sugeridos pela IA, follow-ups automáticos e zero etapas manuais.
              </p>
              <a href="#" className="text-sm font-semibold flex items-center gap-1" style={{color: "#1A2229"}}>Saiba mais →</a>
            </div>
            <div className="overflow-hidden rounded-xl mx-4 mb-0 shadow-lg">
              <img src="https://pcfcdn.kommo.com/images/pages/main/demo-block/en/demo-block-calendar-image.png" alt="Agenda" className="w-full"/>
            </div>
          </div>

          {/* Botão de chat */}
          <div className="rounded-3xl overflow-hidden flex flex-col" style={{background: "#e6f0ff"}}>
            <div className="p-8 pb-4">
              <h3 className="text-2xl font-black mb-3" style={{color: "#1A2229"}}>Botão de chat web</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Adicione um botão de chat inteligente ao seu site e converta visitantes em clientes na hora, direto pelo WhatsApp.
              </p>
              <a href="#" className="text-sm font-semibold flex items-center gap-1" style={{color: "#1A2229"}}>Saiba mais →</a>
            </div>
            <div className="overflow-hidden rounded-xl mx-4 mb-0 shadow-lg">
              <img src="https://pcfcdn.kommo.com/images/pages/main/demo-block/en/demo-block-chat-button-image.png" alt="Chat button" className="w-full"/>
            </div>
          </div>
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
