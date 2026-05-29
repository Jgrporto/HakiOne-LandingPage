export default function Testimonials() {
  return (
    <section id="cta-final" className="bg-white px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[32px] bg-[#1A2229] px-6 py-14 shadow-[0_30px_90px_rgba(15,23,42,0.22)] md:px-12">
          <div className="relative">
            <div className="pointer-events-none absolute -top-16 left-1/3 h-40 w-40 rounded-full bg-[#22C55E]/18 blur-3xl" />
            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[#3B82F6]/16 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#22C55E]">Comece agora</p>
              <h2 className="mb-4 text-4xl font-black leading-tight text-white md:text-5xl">
                Seu WhatsApp não precisa continuar uma bagunça.
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-slate-300">
                Teste a Haki One e veja como organizar atendimentos, automatizar rotinas e recuperar o controle da sua operação.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-full bg-[#22C55E] px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-[0_14px_40px_rgba(34,197,94,0.24)] transition-all hover:-translate-y-0.5 hover:bg-[#16a34a]"
                >
                  Teste Grátis Aqui
                </a>
                <a
                  href="#cliente"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-medium uppercase tracking-[0.08em] text-white transition-colors hover:bg-white/10"
                >
                  Falar com Especialista
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
