export default function Actualizaciones() {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">ACTUALIZACIONES</h1>
        <p className="mb-4">
          Dejo un video de cuando Mercado Pago actualizo la forma de hacer pagos de prueba
        </p>
        {/* Contenedor responsive para iframe */}
        <div
          style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden',
            borderRadius: '0.5rem',
            boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
            marginBottom: '1.5rem',
          }}
        >
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
      </div>
    );
  }
  