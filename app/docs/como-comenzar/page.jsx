export default function ComoComenzar() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Cómo comenzar con Mercado Pago</h1>
      <p className="mb-4">
        Lo primero que debes hacer es crear una aplicación en Mercado Pago y configurar tus cuentas de prueba para desarrollar sin problemas.
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
          src="https://www.youtube.com/embed/vEXwN9-tKcs?si=go6i7Bv4BYHWdhvQ" 
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

      <p>
        Este video te ayudará a entender rápidamente cómo empezar a integrar Mercado Pago en tu proyecto.
      </p>

      <p className="mt-6 mb-2 font-semibold">Ejemplo básico:</p>
<pre className="bg-gray-100 text-sm p-4 rounded-md overflow-x-auto mb-6">
  <code className="text-gray-800">
    {`fetch("https://api.mercadopago.com/v1/payments", {
  method: "POST",
  headers: {
    "Authorization": "Bearer TU_TOKEN",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    transaction_amount: 100,
    description: "Título del producto",
    payment_method_id: "visa",
    payer: {
      email: "test_user@test.com"
    }
  })
})`}
  </code>
</pre>
    </div>
  );
}
