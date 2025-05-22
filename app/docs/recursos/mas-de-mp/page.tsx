import NextButton from "@/components/NextButton";

export default function MasVideos() {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">MAS VIDEITOS</h1>
        <p className="mb-4">
          Dejo un video sobre como integrar Mercado Pago con un Modal y otras formas de integracion
        </p>
        {/* Contenedor responsive para iframe */}
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg mb-8">
          <iframe
            src="https://www.youtube.com/embed/1CUGrPL7Yuo?si=F7zcuDtcjCpKrZ3S"
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
        <NextButton href="/docs/recursos/codigos" label="Siguiente: Códigos" />

      </div>
    );
  }
  