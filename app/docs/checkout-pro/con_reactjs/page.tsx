import NextButton from "@/components/NextButton";

export default function conReactjs() {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Checkout Pro con React JS</h1>
        {/* Contenedor responsive para iframe */}
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg mb-8">
          <iframe
            src="https://www.youtube.com/embed/-VD-l5BQsuE?si=aKx083W7MfSmKo0C" 
            title="Video introductorio Mercado Pago"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 20,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          />
        </div>
  
        <p className="mb-4 text-zinc-300 leading-relaxed">
        Este video que grabé hace un tiempo sigue siendo totalmente vigente para implementar el Checkout Pro de Mercado Pago. En él te muestro cómo:
        </p>

        <ul className="mb-4 list-disc pl-5 text-zinc-300 leading-relaxed space-y-1">
         <li>✅ Armar el código necesario para crear una preferencia (nuestro producto o servicio).</li>
         <li>✅ Crear una APP en el panel de Mercado Pago para obtener credenciales de testeo.</li>
         <li>✅ Probar pagos de forma segura y ver dónde encontrar las credenciales de producción para cobrar en serio.</li>
         <li>✅ Además, te dejo un video más actualizado más abajo 👇, ya que Mercado Pago cambió la forma de testear y ahora pone mucho más foco en el uso de cuentas de prueba.</li>
        </ul>


        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg mb-8">
          <iframe
            src="https://www.youtube.com/embed/gCcCicCDJgo?si=XR0X57Cl45QMg_Jw"
            title="Video introductorio Mercado Pago"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 20,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          />
        </div>
        <ul className="mb-4 list-disc pl-5 text-zinc-300 leading-relaxed space-y-1">
            <li>✅ ACTUALIZACIÓN: si pide un código de verificacion. Probar con los ultimos 6 digitos del USER ID de la cuenta de prueba.</li>
            <li> ✅ De todas formas el pedir un código de verficacion fue un error temporal de la Api de MP, en teoria ya fue solucionado y no debería volver a pedirte un código. </li>
          </ul>
        <p className="mb-4 text-zinc-300 leading-relaxed">
  Por último, te dejo este video que grabé porque muchos me lo pidieron en su momento. 
  En él te muestro cómo integrar la pasarela de pago de Checkout Pro usando distintas formas de redirección: 
  ya sea como un modal, redirigiendo al usuario a otra página,
   o manteniéndolo dentro de la misma. 
   Es decirlas distintas opciones de experiencia de pago que ofrece la API.
</p>

        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg mb-8">
          <iframe
            src="https://www.youtube.com/embed/1CUGrPL7Yuo?si=F7zcuDtcjCpKrZ3S" 
            title="Video introductorio Mercado Pago"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          />
        </div>
  
        <NextButton href="/docs/checkout-pro/con_nextjs" label="Siguiente: Checkout Pro - Next JS" />
      </div>
    );
  }
  