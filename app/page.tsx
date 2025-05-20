import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-20 sm:py-28 max-w-3xl mx-auto text-zinc-100 font-sans">
      <section className="text-center sm:text-left space-y-6">
        <Image
          src="/mp-fans-logo.svg" // Cambialo si tenés un logo real
          alt="MP Fans"
          width={180}
          height={40}
          className="mx-auto sm:mx-0"
        />

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Bienvenido a <span className="text-blue-400">MP Fans</span>
        </h1>

        <p className="text-lg text-zinc-300 leading-relaxed">
          Esta es una guía práctica y humana para desarrolladores que quieren integrar Mercado Pago
          en sus proyectos. Vas a encontrar pasos claros, recursos útiles, ejemplos reales y un espacio
          para aprender y compartir con la comunidad.
        </p>

        <p className="text-base text-zinc-400">
          Te mostramos cómo empezar desde cero, explorar Checkout Pro, Bricks, la API directa y también
          cómo gestionar suscripciones y cuentas de prueba.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Link
            href="/docs/como-comenzar"
            className="inline-flex items-center justify-center rounded-full bg-blue-500 text-white font-medium px-6 py-3 text-sm hover:bg-blue-600 transition"
          >
            Comenzar la guía
          </Link>
          <a
            href="https://www.mercadopago.com.ar/developers/es"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-zinc-600 text-zinc-200 px-6 py-3 text-sm hover:bg-zinc-800 transition"
          >
            Ir a la documentación oficial
          </a>
        </div>
      </section>

      <section className="mt-20 space-y-10">
        <h2 className="text-2xl font-semibold">¿Qué vas a encontrar aquí?</h2>
        <ul className="list-disc list-inside space-y-2 text-zinc-300">
          <li>Guías paso a paso para cada tipo de integración</li>
          <li>Explicaciones claras para gente real (no solo para expertos)</li>
          <li>Cómo testear tu integración correctamente</li>
          <li>Casos de uso comunes y soluciones a problemas frecuentes</li>
          <li>Recursos, enlaces útiles y una comunidad de apoyo</li>
        </ul>
      </section>

      <footer className="mt-28 text-center text-sm text-zinc-500">
        Hecho con ❤️ por desarrolladores para desarrolladores
      </footer>
    </main>
  );
}
