import { useState } from "react";
<<<<<<< HEAD
import { ArrowRight, Bot, CalendarCheck2, ChartNoAxesColumn, MessageSquareMore } from "lucide-react";
=======
>>>>>>> 6ab3a3e2381b7b82765e283b2b0aad20e976b492
import IconsCarousel from "./IconsCarousel";

const tabs = [
  {
    id: "dashboard",
    label: "Dashboard",
<<<<<<< HEAD
    icon: ChartNoAxesColumn,
    image:
      "https://pcfcdn.kommo.com/images/pages/main/demo-block/en/demo-block-crm-image.png",
  },
  {
    id: "atendimento",
    label: "Atendimento",
    icon: MessageSquareMore,
    image:
      "https://pcfcdn.kommo.com/images/pages/main/demo-block/en/demo-block-inbox-image.png",
  },
  {
    id: "automacao",
    label: "Automação",
    icon: Bot,
    image:
      "https://pcfcdn.kommo.com/images/pages/main/demo-block/en/demo-block-chat-button-image.png",
  },
  {
    id: "agenda",
    label: "Agenda",
    icon: CalendarCheck2,
    image:
      "https://pcfcdn.kommo.com/images/pages/main/demo-block/en/demo-block-calendar-image.png",
  },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const active = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  return (
    <section id="como-funciona" className="relative isolate overflow-hidden bg-white pt-16">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-1/2 top-[360px] h-[920px] w-[1900px] -translate-x-1/2">
=======
    icon: "fa-solid fa-chart-bar",
  },
  {
    id: "kanban",
    label: "Kanban",
    icon: "fa-brands fa-trello",
  },
  {
    id: "followup",
    label: "Follow-Up",
    icon: "fa-solid fa-person-chalkboard",
  },
  {
    id: "rotinas",
    label: "Rotinas & Disparos",
    icon: "fa-regular fa-calendar-days",
  },
];

const tabImages = {
  dashboard:
    "https://pcfcdn.kommo.com/images/pages/main/demo-block/en/demo-block-crm-image.png",
  kanban:
    "https://pcfcdn.kommo.com/images/pages/main/demo-block/en/demo-block-inbox-image.png",
  followup:
    "https://pcfcdn.kommo.com/images/pages/main/demo-block/en/demo-block-chat-button-image.png",
  rotinas:
    "https://pcfcdn.kommo.com/images/pages/main/demo-block/en/demo-block-calendar-image.png",
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <section className="relative isolate overflow-hidden pt-14 bg-white">
      {/* Background em nuvens estilo Kommo */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-1/2 top-[390px] h-[920px] w-[1900px] -translate-x-1/2">
>>>>>>> 6ab3a3e2381b7b82765e283b2b0aad20e976b492
          <div
            className="absolute inset-0 rounded-full opacity-95 blur-[105px]"
            style={{
              background:
<<<<<<< HEAD
                "radial-gradient(ellipse at 22% 64%, rgba(34,197,94,0.18) 0%, rgba(34,197,94,0.08) 30%, transparent 66%), radial-gradient(ellipse at 78% 64%, rgba(59,130,246,0.20) 0%, rgba(59,130,246,0.11) 32%, transparent 68%), radial-gradient(ellipse at 50% 84%, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.12) 36%, transparent 72%)",
            }}
          />
          <div className="absolute left-[-2%] top-[260px] h-[520px] w-[820px] rounded-full bg-[#22C55E]/16 blur-[140px]" />
          <div className="absolute right-[-1%] top-[220px] h-[520px] w-[850px] rounded-full bg-[#3B82F6]/18 blur-[140px]" />
          <div className="absolute left-1/2 top-[460px] h-[520px] w-[1120px] -translate-x-1/2 rounded-full bg-[#3B82F6]/16 blur-[155px]" />
          <div className="absolute left-1/2 top-[140px] h-[420px] w-[1000px] -translate-x-1/2 rounded-full bg-white/60 blur-[130px]" />
        </div>
        <div className="absolute inset-x-0 top-0 h-[430px] bg-gradient-to-b from-white via-white to-transparent" />
=======
                "radial-gradient(ellipse at 22% 64%, rgba(59,130,246,0.30) 0%, rgba(59,130,246,0.16) 30%, transparent 66%), radial-gradient(ellipse at 78% 64%, rgba(96,165,250,0.24) 0%, rgba(96,165,250,0.13) 32%, transparent 68%), radial-gradient(ellipse at 50% 84%, rgba(59,130,246,0.32) 0%, rgba(59,130,246,0.17) 36%, transparent 72%)",
            }}
          />

          <div className="absolute left-[-1%] top-[250px] h-[560px] w-[900px] rounded-full bg-[#3B82F6]/30 blur-[135px]" />

          <div className="absolute right-[-1%] top-[250px] h-[560px] w-[900px] rounded-full bg-[#60A5FA]/24 blur-[140px]" />

          <div className="absolute left-1/2 top-[430px] h-[520px] w-[1120px] -translate-x-1/2 rounded-full bg-[#3B82F6]/30 blur-[155px]" />

          <div className="absolute left-1/2 top-[140px] h-[430px] w-[1000px] -translate-x-1/2 rounded-full bg-white/55 blur-[130px]" />
        </div>

        <div className="absolute inset-x-0 top-0 h-[430px] bg-gradient-to-b from-white via-white to-transparent" />

>>>>>>> 6ab3a3e2381b7b82765e283b2b0aad20e976b492
        <div className="absolute inset-y-0 left-0 w-[18%] bg-gradient-to-r from-white to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[18%] bg-gradient-to-l from-white to-transparent" />
      </div>

<<<<<<< HEAD
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-16 text-center md:px-6">
        <IconsCarousel />

        <h1 className="mx-auto mb-6 max-w-[940px] text-[42px] font-semibold leading-[1.02] tracking-[-0.03em] md:text-[62px] lg:text-[74px]">
          <span className="bg-gradient-to-r from-[#22C55E] to-[#3B82F6] bg-clip-text text-transparent">
            Pare de perder vendas
          </span>
          <br />
          <span className="text-[#1A2229]">porque seu WhatsApp virou bagunça.</span>
        </h1>

        <p className="mx-auto mb-9 max-w-[760px] text-[18px] leading-[1.7] text-slate-600 md:text-[19px]">
          Organize atendimentos, crie automações e recupere o controle do seu negócio, gerando previsibilidade
          de crescimento e recorrência.
        </p>

        <div className="mb-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#22C55E] px-8 py-4 text-base font-semibold uppercase tracking-[0.08em] text-white shadow-[0_14px_40px_rgba(34,197,94,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#16a34a]"
          >
            TESTE GRÁTIS AQUI
            <ArrowRight size={18} />
          </a>
          <a
            href="#modulos"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-medium text-[#1A2229] shadow-sm transition-colors hover:bg-slate-50"
          >
            Ver módulos da operação
          </a>
        </div>

        <div className="mx-auto mb-8 grid max-w-4xl gap-3 text-left md:grid-cols-3">
          {[
            "Atendimentos centralizados para sua equipe.",
            "Follow-ups, cobranças e agendamentos em fluxo.",
            "Visão clara do que está parado, quente ou pendente.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/70 bg-white/70 px-4 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur-sm"
            >
              <p className="text-sm font-medium leading-6 text-slate-700">{item}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto flex max-w-[960px] flex-wrap justify-center gap-3 border-b border-slate-200/80 pb-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative flex items-center gap-2 rounded-full px-4 py-3 text-[15px] font-medium transition-colors"
                style={{
                  color: isActive ? "#1A2229" : "#64748b",
                  background: isActive ? "rgba(255,255,255,0.82)" : "transparent",
                  boxShadow: isActive ? "0 10px 30px rgba(15,23,42,0.06)" : "none",
                }}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-8 max-w-[1260px] px-4 pb-20 md:px-6 md:pb-28">
        <div
          className="overflow-hidden rounded-[28px] border border-[#3B82F6]/20 shadow-2xl"
          style={{
            background: "rgba(255,255,255,0.82)",
            boxShadow: "0 0 0 1px rgba(59,130,246,0.08), 0 30px 95px rgba(26,34,41,0.12)",
          }}
        >
          <div className="border-b border-slate-200/70 bg-white/75 px-5 py-4">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>
          </div>

          <div className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4 md:p-6">
            <img src={active.image} alt={active.label} className="block w-full rounded-[20px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
=======
      <div className="relative z-10 max-w-[980px] mx-auto px-4 pt-16 pb-0 text-center">
        {/* Channel icons carousel */}
        <IconsCarousel />

        <h1
          className="mx-auto mb-5 max-w-[900px] text-[40px] font-semibold leading-[1.08] tracking-[0.01em] md:text-[58px] lg:text-[64px]"
          style={{ color: "#1A2229" }}
        >
          Plataforma operacional para
          <br />
          serviços recorrentes
        </h1>

        <p className="mx-auto mb-9 max-w-[520px] text-[17px] leading-[1.55] text-gray-500">
          Organize seus Leads, clientes e cobranças sem perder recorrência.
        </p>

        {/* CTA */}
        <div className="flex justify-center mb-16">
          <button
            className="px-8 py-3.5 rounded-full text-white font-semibold text-base shadow-md flex items-center gap-2 transition-transform hover:scale-[1.02]"
            style={{
              background: "linear-gradient(90deg, #22C55E, #16a34a)",
            }}
          >
            Teste grátis agora!
          </button>
        </div>

        {/* Tabs */}
        <div className="mx-auto flex max-w-[960px] justify-center gap-7 border-b border-gray-200/80">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative flex items-center gap-2 px-2 pb-4 text-[16px] font-medium transition-colors whitespace-nowrap"
              style={{
                color: activeTab === tab.id ? "#1A2229" : "#8b95a1",
              }}
            >
              <i className={`${tab.icon} text-[15px]`} />
              {tab.label}

              {activeTab === tab.id && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                  style={{ background: "#1A2229" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

{/* Demo screenshot */}
<div className="relative z-10 mx-auto mt-8 max-w-[1260px] px-4 pb-24 md:pb-28 lg:pb-32">
  <div
    className="overflow-hidden rounded-[22px] border-2 border-[#3B82F6]/30 shadow-2xl"
    style={{
      background: "rgba(255,255,255,0.78)",
      boxShadow:
        "0 0 0 1px rgba(59,130,246,0.08), 0 30px 95px rgba(59,130,246,0.18)",
    }}
  >
    <div className="flex items-center gap-2 px-5 py-4 bg-white/65">
      <div className="flex gap-2">
        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-400" />
      </div>

      <div className="h-5 flex-1 rounded bg-white/75" />
    </div>

    <img
      src={tabImages[activeTab]}
      alt={tabs.find((tab) => tab.id === activeTab)?.label || "Demo"}
      className="block w-full object-cover"
    />
  </div>
</div>
    </section>
  );
}
>>>>>>> 6ab3a3e2381b7b82765e283b2b0aad20e976b492
