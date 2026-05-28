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
        </div>
      </div>
    </section>
  );
}