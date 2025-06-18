import NextButton from "@/components/NextButton";

export default function Actualizaciones() {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">ACTUALIZACIONES</h1>
        <p className="mb-4">
          Dejo un video de cuando Mercado Pago actualizo la forma de hacer pagos de prueba
        </p>
        {/* Contenedor responsive para iframe */}
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg mb-8">
          <iframe
            src="https://www.youtube.com/embed/gCcCicCDJgo?si=gZ0RzVGAa11uePVs" 
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
        <ul className="mb-4 list-disc pl-5 text-zinc-300 leading-relaxed space-y-1">
            <li>✅ ACTUALIZACIÓN: si pide un código de verificacion. Probar con los ultimos 6 digitos del USER ID de la cuenta de prueba.</li>
            <li> ✅ De todas formas el pedir un código de verficacion fue un error temporal de la Api de MP, en teoria ya fue solucionado y no debería volver a pedirte un código. </li>
          </ul>
        <NextButton href="/docs/recursos/codigos" label="Siguiente: Códigos" />

      </div>
    );
  }
  