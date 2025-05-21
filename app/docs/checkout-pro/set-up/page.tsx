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
          Nuestra tarea es simplemente crear una APP en el dashboard de desarrolladores y armar unas cuentas de prueba para poder testear haciendo pagos ficticios y ver si nuestro código funciona.
          Después, solo se necesita generar un "preference ID" con los datos de la compra (vendría a ser el producto que queremos vender, con todos sus datos: precio, cantidad, nombre, etc.),
          y listo: Mercado Pago se encarga del resto. Ideal si querés evitarte lidiar con formularios, validaciones y todas esas cosas.
        </p>

        <p className="text-base text-zinc-300 leading-relaxed">
          Dicho esto, vamos a ver en detalle cómo crear una APP, cómo armar las cuentas de prueba y cómo generar el "preference ID". Cuando veamos que todo funciona, dejamos el ambiente de prueba y pasamos a producción para hacer funcionar pagos reales.
        </p>

        <p className="text-base text-zinc-300 leading-relaxed">
          ¿Lo mejor? No necesitás ser un senior ni haber usado la API antes. Te voy a mostrar cómo arrancar desde cero.
        </p>
      </section>
    </main>
  );
}
