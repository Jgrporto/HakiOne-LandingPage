import { useState } from "react";
import IconsCarousel from "./IconsCarousel";

const tabs = [
  {
    id: "dashboard",
    label: "Dashboard",
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
          <div
            className="absolute inset-0 rounded-full opacity-95 blur-[105px]"
            style={{
              background:
                "radial-gradient(ellipse at 22% 64%, rgba(59,130,246,0.30) 0%, rgba(59,130,246,0.16) 30%, transparent 66%), radial-gradient(ellipse at 78% 64%, rgba(96,165,250,0.24) 0%, rgba(96,165,250,0.13) 32%, transparent 68%), radial-gradient(ellipse at 50% 84%, rgba(59,130,246,0.32) 0%, rgba(59,130,246,0.17) 36%, transparent 72%)",
            }}
          />

          <div className="absolute left-[-1%] top-[250px] h-[560px] w-[900px] rounded-full bg-[#3B82F6]/30 blur-[135px]" />

          <div className="absolute right-[-1%] top-[250px] h-[560px] w-[900px] rounded-full bg-[#60A5FA]/24 blur-[140px]" />

          <div className="absolute left-1/2 top-[430px] h-[520px] w-[1120px] -translate-x-1/2 rounded-full bg-[#3B82F6]/30 blur-[155px]" />

          <div className="absolute left-1/2 top-[140px] h-[430px] w-[1000px] -translate-x-1/2 rounded-full bg-white/55 blur-[130px]" />
        </div>

        <div className="absolute inset-x-0 top-0 h-[430px] bg-gradient-to-b from-white via-white to-transparent" />

        <div className="absolute inset-y-0 left-0 w-[18%] bg-gradient-to-r from-white to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[18%] bg-gradient-to-l from-white to-transparent" />
      </div>

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