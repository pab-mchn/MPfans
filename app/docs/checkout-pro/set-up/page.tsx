import NextButton from '@/components/NextButton'

export default function CheckoutProIntro() {
  return (
    <main className="min-h-screen px-6 py-20 sm:py-28 max-w-3xl mx-auto text-zinc-100 font-sans">
      <section className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-center sm:text-left">
          ¿Qué es <span className="text-blue-400">Checkout Pro</span>?
        </h1>

        <p className="text-lg text-zinc-300 leading-relaxed">
          Checkout Pro es una solución de pago lista para usar que te ofrece Mercado Pago. Básicamente, te genera un enlace de pago
          donde tus compradores pueden pagar con tarjeta, dinero en cuenta, transferencia o incluso en cuotas, todo dentro de una interfaz segura
          y mantenida por Mercado Pago. Esto está bueno porque no hay que preocuparse mucho
          por la seguridad y la gestión del pago. Todo eso se lo derivamos directamente a Mercado Pago.
        </p>

        <p className="text-lg text-zinc-300 leading-relaxed">
  Esta es la opción más recomendable si estás dando tus primeros pasos con la API de Mercado Pago. ¿Por qué? Porque nuestro sitio simplemente se convierte en un lugar donde se recopilan los datos de un producto que queremos vender (lo que Mercado Pago llama una "preferencia"): nombre, precio, cantidad, etc. Toda esa información se le envía a Mercado Pago para que se encargue del pago.
</p>

<p className="text-lg text-zinc-300 leading-relaxed">
  La gran misión de nuestro código, entonces, es crear esa preferencia correctamente. Para eso, necesitamos crear una app desde el panel de desarrolladores de Mercado Pago, lo que nos permitirá obtener credenciales válidas para operar.
</p>

<p className="text-lg text-zinc-300 leading-relaxed">
  Una vez integradas esas credenciales en nuestro código, y cargados los datos del producto, lo siguiente es crear cuentas de prueba (usuarios "fake" de Mercado Pago) para poder testear todo el flujo de pago de forma segura y sin usar dinero real.
</p>

<p className="text-lg text-zinc-300 leading-relaxed">
  Si todo funciona bien en test, solo queda el último paso: reemplazar las credenciales de prueba por las de producción, y así ya podés empezar a recibir pagos reales.
</p>

<p className="text-base text-zinc-300 leading-relaxed">
  Esto es justamente lo que vamos a hacer ahora: armar el código que recopile los datos del producto (la preferencia), crear una app para obtener credenciales, testear los pagos con cuentas de prueba y finalmente integrar las credenciales de producción para salir al mundo real.
</p>
<NextButton href="/docs/checkout-pro/con_javascript" label="Siguiente: Checkout Pro - Javascript" />

      </section>
    </main>
  );
}
