import NextButton from "@/components/NextButton";

export default function MasVideos() {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Capturando infromacion de pagos (webhooks)</h1>
        {/* Contenedor responsive para iframe */}
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg mb-8">

          <iframe
            src="https://www.youtube.com/embed/s29AsZ4OeC4?si=eTTZ1jKt9fPAiIGS"
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
        <p className="mb-6 text-zinc-300 leading-relaxed">
        En este video te muestro cómo capturar la información de un pago exitoso 
        utilizando webhooks. Es fundamental para saber en qué momento se aprobó un pago, 
        y el guardar el registro en por ejemplo tu base de datos. 
        Si estás pensando en hacer una integración más profesional, esto es clave.
      </p>
      <NextButton href="/docs/recursos/actualizaciones" label="Siguiente: Actualizaciones de la Api" />
      </div>
    );
  }
  