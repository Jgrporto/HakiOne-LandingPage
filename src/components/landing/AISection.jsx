import { useState } from "react";

const aiFeatures = [
  { icon: "🕐", label: "Responda 24/7 sem se cansar" },
  { icon: "💬", label: "Fique por dentro de todos os comentários" },
  { icon: "📋", label: "Crie acompanhamentos automáticos" },
  { icon: "📈", label: "Acompanhe quais anúncios convertem" },
  { icon: "🔥", label: "Identifique seus leads mais quentes" },
];

export default function AISection() {
  const [active, setActive] = useState(0);

  return (
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}