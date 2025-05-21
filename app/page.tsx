import NextButton from '@/components/NextButton'

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-20 sm:py-28 max-w-3xl mx-auto text-zinc-100 font-sans">
      <section className="text-center sm:text-left space-y-6">

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Bienvenidos a <span className="text-blue-400">MP Fans</span>
        </h1>

        <p className="text-lg text-zinc-300 leading-relaxed">
          Esta es una guía práctica para desarrolladores que quieren integrar Mercado Pago
          en sus proyectos. Esta pensado como documentacion alternativa con pasos claros, recursos de codigo y video
          que hagan posible la integracion de esta Api para desarrolladores de todos los niveles.
        </p>

        <p className="text-base text-zinc-400">
          Vamos a ver cómo empezar desde cero, como integrar Mercado Pago con Javascript, React JS y Next JS 
          con checkout Pro (de momento) por que puede que se agreguen a esta guia integraciones como suscripciones, checkout api, checkout Bricks, etc.
        </p>
      </section>

      <section className="mt-20 space-y-10">
        <h2 className="text-2xl font-semibold">¿Qué vas a encontrar aquí?</h2>
        <ul className="list-disc list-inside space-y-2 text-zinc-300">
          <li>Guías paso a paso para hacer la integracion de Mercado Pago.</li>
          <li>Explicaciones claras con recursos en codigo y video para desarrolladores de todos los niveles.</li>
          <li>Un rincon en donde dejar tus dudas y encontrar respuestas en comunidad.</li>
          <li>Un lugar con recursos de video, codigo y texto sobre actualizaciones que pueda tener la api.</li>
          <li>Apartado para resolucion de errores comunes, preguntas frecuentes, etc.</li>
          <li>Recursos y enlaces útiles.</li>
        </ul>
      </section>
      <NextButton href="/docs/introduccion" label="Siguiente: Por que MP Fans" />
      <footer className="mt-28 text-center text-sm text-zinc-500">
        Hecho con ❤️ por un simple desarrollador.
      </footer>
    </main>
  );
}
