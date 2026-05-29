import { CheckCircle2, PlayCircle } from "lucide-react";

const knowledgeItems = [
  "Vídeos rápidos por rotina operacional",
  "Tutoriais de implantação e automação",
  "Artigos com dúvidas frequentes da equipe",
];

const implementationSteps = [
  "Mapeamento da operação",
  "Configuração de dashboards",
  "Estrutura de chatbot e fluxos iniciais",
  "Acompanhamento de ativação",
];

export default function Channels() {
  return (
    <section className="bg-[#F7F7F7] px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#22C55E]">Experiência Haki One</p>
          <h2 className="mb-4 text-4xl font-black leading-tight text-[#1A2229] md:text-5xl">
            Uma experiência pensada para você operar melhor
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            Além da tecnologia, a Haki One entrega estrutura, orientação e implantação para sua operação funcionar de verdade.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <div className="border-b border-slate-100 p-7">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#3B82F6]">Tela 01</p>
              <h3 className="mb-3 text-2xl font-black text-[#1A2229]">Wiki com vídeos e processos explicados</h3>
              <p className="text-sm leading-7 text-slate-600">
                Acesse tutoriais, processos e orientações sempre que precisar. Tire dúvidas, aprenda as rotinas da plataforma e mantenha sua equipe alinhada.
              </p>
            </div>

            <div className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] p-7">
              <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-[#1A2229]">Central operacional</p>
                    <p className="text-xs text-slate-400">Treinamento da equipe</p>
                  </div>
                  <span className="rounded-full bg-[#3B82F6]/10 px-3 py-1 text-xs font-semibold text-[#3B82F6]">
                    12 conteúdos
                  </span>
                </div>

                <div className="space-y-3">
                  {knowledgeItems.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4">
                      <PlayCircle size={18} className="text-[#3B82F6]" />
                      <span className="text-sm font-medium text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <div className="border-b border-slate-100 p-7">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#22C55E]">Tela 02</p>
              <h3 className="mb-3 text-2xl font-black text-[#1A2229]">Implantação personalizada</h3>
              <p className="text-sm leading-7 text-slate-600">
                Configuramos dashboards, chatbots, rotinas e fluxos iniciais para que você possa focar no que realmente importa: atender melhor e vender com mais previsibilidade.
              </p>
            </div>

            <div className="bg-[linear-gradient(180deg,#ffffff_0%,#f6fff9_100%)] p-7">
              <div className="rounded-[24px] border border-slate-200 bg-[#1A2229] p-5 text-white shadow-lg">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">Plano de implantação</p>
                    <p className="text-xs text-slate-400">Ativação assistida</p>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-[#22C55E]">
                    Em andamento
                  </span>
                </div>

                <div className="space-y-3">
                  {implementationSteps.map((step) => (
                    <div key={step} className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-4">
                      <CheckCircle2 size={18} className="text-[#22C55E]" />
                      <span className="text-sm font-medium text-slate-200">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
