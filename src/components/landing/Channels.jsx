const logos = [
  "Opt", "UGP", "Modo Center", "bioage", "SS SOLID", "SOROCALHAS", "Reis Pinto Advogados", "AW2", "SUBmundo"
];

export default function Channels() {
  return (
    <section className="py-16 px-4 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-base font-semibold text-gray-800 mb-8">Amado em mais de 100 países</p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-8">
          {logos.map((logo) => (
            <span key={logo} className="text-sm font-bold text-gray-400 tracking-tight hover:text-gray-600 transition-colors">
              {logo}
            </span>
          ))}
        </div>
        <a href="#" className="text-sm font-semibold text-gray-800 hover:underline flex items-center justify-center gap-1">
          Assista a histórias reais →
        </a>
      </div>
    </section>
  );
}