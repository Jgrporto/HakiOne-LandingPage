import { useState } from "react";

<<<<<<< HEAD
const benefits = [
  "Responde e apoia atendimentos 24/7",
  "Ajuda a organizar conversas e prioridades",
  "Cria acompanhamentos automáticos",
  "Apoia cobranças, agendamentos e retornos",
  "Ajuda seu time a não perder oportunidades no WhatsApp",
];

const messages = [
  { side: "left", author: "Cliente", text: "Oi, ainda consigo fechar o plano hoje?", time: "10:02" },
  {
    side: "right",
    author: "Kiki IA",
    text: "Consegue sim. Vou te enviar as opções e já deixar seu atendimento separado para acompanhamento.",
    time: "10:03",
  },
  { side: "left", author: "Cliente", text: "Pode ser no WhatsApp mesmo?", time: "10:04" },
  {
    side: "right",
    author: "Kiki IA",
    text: "Sim. Vou organizar tudo por aqui e te lembrar do próximo passo.",
    time: "10:04",
  },
=======
const aiFeatures = [
  { icon: "🕐", label: "Responda 24/7 sem se cansar" },
  { icon: "💬", label: "Fique por dentro de todos os comentários" },
  { icon: "📋", label: "Crie acompanhamentos automáticos" },
  { icon: "📈", label: "Acompanhe quais anúncios convertem" },
  { icon: "🔥", label: "Identifique seus leads mais quentes" },
>>>>>>> 6ab3a3e2381b7b82765e283b2b0aad20e976b492
];

export default function AISection() {
  const [active, setActive] = useState(0);

  return (
<<<<<<< HEAD
    <section className="bg-white px-4 py-20 md:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <h2 className="mb-4 text-4xl font-black text-[#1A2229] md:text-5xl">Conheça a Kiki</h2>
          <p className="mb-4 text-lg leading-8 text-slate-600">
            Nossa inteligência artificial criada para ajudar seu time de atendimento a responder melhor, organizar conversas e manter sua operação em movimento.
          </p>
          <p className="mb-8 text-base leading-8 text-slate-500">
            A Kiki atua como uma assistente operacional dentro da sua rotina: ajuda no atendimento, apoia follow-ups, identifica oportunidades e reduz tarefas repetitivas.
          </p>

          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <button
                key={benefit}
                onClick={() => setActive(index)}
                className="flex w-full items-center gap-3 rounded-2xl border px-4 py-4 text-left text-sm font-medium transition-all"
                style={
                  active === index
                    ? {
                        borderColor: "rgba(59,130,246,0.2)",
                        background: "rgba(59,130,246,0.06)",
                        color: "#1A2229",
                        boxShadow: "0 12px 30px rgba(59,130,246,0.08)",
                      }
                    : {
                        borderColor: "#e5e7eb",
                        background: "white",
                        color: "#475569",
                      }
                }
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#22C55E]/10 text-xs font-bold text-[#22C55E]">
                  0{index + 1}
                </span>
                {benefit}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-[440px] overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
            <div className="flex items-center justify-between border-b border-slate-100 bg-[#1A2229] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3B82F6] text-sm font-bold text-white">Ki</div>
                <div>
                  <p className="text-sm font-semibold text-white">Kiki IA</p>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
                    <span className="text-xs text-slate-300">Operação online</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] p-5">
              {messages.map((message, index) => (
                <div key={`${message.author}-${index}`} className={`flex ${message.side === "right" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[82%] rounded-3xl px-4 py-3 shadow-sm ${
                      message.side === "right" ? "rounded-tr-md bg-[#dcf8c6]" : "rounded-tl-md bg-white"
                    }`}
                  >
                    <p className="mb-1 text-xs font-semibold text-slate-400">{message.author}</p>
                    <p className="text-sm leading-7 text-slate-700">{message.text}</p>
                    <p className="mt-2 text-right text-[11px] text-slate-400">{message.time}</p>
                  </div>
                </div>
              ))}

              <div className="rounded-2xl border border-[#3B82F6]/10 bg-white p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#3B82F6]">Ação sugerida pela Kiki</p>
                <p className="text-sm leading-7 text-slate-600">
                  Separar atendimento para acompanhamento, enviar opções do plano e agendar lembrete automático para retorno.
                </p>
=======
    <section className="py-20 px-4" style={{background: "linear-gradient(160deg, #e8e4ff 0%, #d4ceff 100%)"}}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-1.5 text-sm font-semibold mb-4" style={{color: "#3B82F6"}}>
              ✦ Haki One IA
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6" style={{color: "#1A2229"}}>
              O colega de IA que<br/>a equipe de vendas<br/>merece
            </h2>

            <button
              className="px-6 py-3 rounded-full text-white font-semibold text-sm mb-8 flex items-center gap-2"
              style={{background: "linear-gradient(90deg, #22C55E, #16a34a)"}}
            >
              Grátis por 14 dias ✦
            </button>

            <div className="flex flex-col gap-2">
              {aiFeatures.map((feat, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="flex items-center gap-3 px-4 py-3 rounded-full text-sm font-medium text-left transition-all"
                  style={active === i
                    ? { background: "white", color: "#1A2229", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }
                    : { background: "transparent", color: "#374151" }
                  }
                >
                  <span>{feat.icon}</span>
                  {feat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right — WhatsApp chat mockup */}
          <div className="flex justify-center">
            <div className="w-72 rounded-3xl overflow-hidden shadow-2xl bg-white">
              {/* Chat header */}
              <div className="px-4 py-3 flex items-center gap-3" style={{background: "#1A2229"}}>
                <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-xs font-bold text-white">LE</div>
                <div>
                  <p className="text-white text-sm font-semibold">Lab Essência 🟢</p>
                </div>
              </div>
              {/* Chat body */}
              <div className="p-4 flex flex-col gap-3" style={{background: "#f0f4f8", minHeight: 300}}>
                <div className="text-xs text-center text-gray-400 mb-2">Hoje</div>
                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 shadow-sm max-w-[85%] self-start">
                  <p className="text-sm text-gray-800">Comprei o perfume errado, posso trocar?</p>
                  <p className="text-xs text-gray-400 text-right mt-1">23:59 ✓</p>
                </div>
                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 shadow-sm max-w-[70%] self-start">
                  <p className="text-sm text-gray-800">Claro, qual o número da compra?</p>
                  <p className="text-xs text-gray-400 text-right mt-1">23:59</p>
                </div>
                <div className="rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-sm max-w-[70%] self-end" style={{background: "#dcf8c6"}}>
                  <p className="text-sm text-gray-800">48233</p>
                  <p className="text-xs text-gray-400 text-right mt-1">23:59 ✓✓</p>
                </div>
                <div className="relative bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 shadow-sm max-w-[85%] self-start">
                  <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full flex items-center justify-center text-white text-sm shadow" style={{background: "#3B82F6"}}>✦</div>
                  <p className="text-sm text-gray-800">Entendi! Você pode atualizar aqui: <span className="text-blue-500 underline">shopify.com/labessencia/compra</span></p>
                  <p className="text-xs text-gray-400 text-right mt-1">23:59</p>
                </div>
>>>>>>> 6ab3a3e2381b7b82765e283b2b0aad20e976b492
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 6ab3a3e2381b7b82765e283b2b0aad20e976b492
