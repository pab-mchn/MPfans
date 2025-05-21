import NextButton from '@/components/NextButton';

export default function ComoComenzar() {
  return (
    <main className="min-h-screen px-6 py-20 sm:py-28 max-w-3xl mx-auto text-zinc-100 font-sans">
      <section className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-center sm:text-left">
          Por qué <span className="text-blue-400">MP Fans</span>
        </h1>

        <p className="text-lg text-zinc-300 leading-relaxed">
          Esta documentación existe porque mucha gente me escribió con dudas sobre cómo integrar Mercado Pago — y yo también pasé por eso.
          Así que decidí armar esta guía paso a paso, con todo lo que aprendí, de la forma más simple, clara y accesible posible.
        </p>

        <p className="text-lg text-zinc-300 leading-relaxed">
          Además, quiero tener un lugar donde centralizar recursos, actualizaciones de la API, errores comunes y todo lo que vaya surgiendo.
        </p>

        <p className="text-base text-zinc-300 leading-relaxed">
          Antes de ponerte a escribir código a lo loco o empezar a bombardear de preguntas a ChatGPT, te recomiendo darle una leída a esta guía
        </p>
      </section>
      <NextButton href="/docs/checkout-pro/set-up" label="Siguiente: Que es checkout Pro" />
    </main>
  );
}

