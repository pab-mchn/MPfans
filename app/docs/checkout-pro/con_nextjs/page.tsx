import NextButton from "@/components/NextButton";

export default function ConNextjs() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Checkout Pro con Next JS
      </h1>

      <p className="mb-4 text-zinc-300 leading-relaxed">
        En este tutorial vamos a armar un mini proyecto con Next.js para integrar Mercado Pago usando Checkout Pro. Vas a aprender a crear un endpoint API en el backend que genere la preferencia de pago, y un frontend para enviar los datos del producto y así poder armar esa preferencia.
      </p>

      <p className="mb-4 text-zinc-300 leading-relaxed">
        Recordá que cuando hablamos de “preferencia” nos referimos a la info básica del producto que querés vender: nombre, precio, cantidad y demás.
      </p>

      <p className="mb-4 text-zinc-300 leading-relaxed">
        Primero en tu proyecto de Next.js hay que instalar el SDK de Mercado Pago corriendo el siguiente comando:
      </p>

      <pre className="mb-4 text-zinc-300 leading-relaxed">
        <code>npm install @mercadopago/sdk-react</code>
      </pre>

      <p className="mb-4 text-zinc-300 leading-relaxed">
        Una vez hecho eso te voy a mostrar los archivos que necesitas crear y cómo organizarlos dentro del sistema de rutas.
      </p>

      <img
        src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/brll14axinncyu6e5kj6.png"
        alt="estructura de archivos"
        className="mb-6"
      />


      <p className="mb-4 text-zinc-300 leading-relaxed">
        Acá hay tres archivos importantes que vamos a usar:
      </p>

      <p className="mb-4 text-zinc-300 leading-relaxed"><strong>global.d.ts</strong></p>
      <p className="mb-4 text-zinc-300 leading-relaxed">Donde vamos a agregar unas configuraciones mínimas para que todo funcione bien con TypeScript y Mercado Pago.</p>

      <p className="mb-4 text-zinc-300 leading-relaxed"><strong>page.tsx</strong></p>
      <p className="mb-4 text-zinc-300 leading-relaxed">El archivo principal del frontend en Next.js donde vamos a mostrar el botón de pago.</p>

      <p className="mb-4 text-zinc-300 leading-relaxed"><strong>route.ts</strong></p>
      <p className="mb-4 text-zinc-300 leading-relaxed"> Que va en <code>api/mercadopago/route.ts</code> y se encarga de la lógica del backend y del armado de la preferencia.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">1. Archivo global.d.ts</h2>

      <p className="mb-4 text-zinc-300 leading-relaxed">
        Dentro de este archivo hay que poner esta simple línea:
      </p>

      <pre className="mb-4 text-zinc-300 leading-relaxed">
        <code>declare module 'mercadopago';</code>
      </pre>

      <img
        src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xn6004pv01s343qhqsvc.png"
        alt="global.d.ts"
        className="mb-6"
      />

      <p className="mb-4 text-zinc-300 leading-relaxed">
        El archivo <code>global.d.ts</code> con <code>declare module 'mercadopago';</code> le indica a TypeScript que existe un módulo llamado 'mercadopago', permitiendo importar y usar esa librería sin errores de tipado.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">2. Archivo page.tsx: El Frontend</h2>

      <p className="mb-4 text-zinc-300 leading-relaxed">
        Este es el archivo principal de Next.js. Lo vamos a utilizar para construir el frontend que mostrará un botón de pago de Mercado Pago, generando la preferencia de pago con los datos de nuestro producto.
      </p>

      <p className="mb-4 text-zinc-300 leading-relaxed">El código sería algo como esto 👇</p>

      <pre className="mb-4 text-sm text-zinc-300 leading-relaxed overflow-auto">
        {`'use client';

import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useState } from 'react';

initMercadoPago('public_key', { locale: 'es-AR' });

export default function ClientWallet() {
  const [preferenceId, setPreferenceId] = useState<string | null>(null);

  const handleClick = async () => {
    const res = await fetch('/api/mercadopago', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'producto con next',
        price: 1000,
        quantity: 1,
      }),
    });

    const data = await res.json();
    setPreferenceId(data.id);
  };

  return (
    <div>
      <button onClick={handleClick}>Pagar</button>
      {preferenceId && <Wallet initialization={{ preferenceId }} />}
    </div>
  );
}`}
      </pre>

      <p className="mb-4 text-zinc-300 leading-relaxed">vamos a enternder un poco que es lo que estamos haciendo en este frontend</p>
      <p className="mb-4 text-zinc-300 leading-relaxed"><strong>&apos;use client&apos;</strong>: En la primer linea con &apos;use client&apos; se convierte el componente en client-side, y eso es clave porque usamos useState para manejar cuándo mostrar el botón de Mercado Pago.</p>
      <p className="mb-4 text-zinc-300 leading-relaxed"><strong>imports</strong>: Lo siguiente es importar las cosas que necesitamos de mercado pago como el initMercadoPago, Wallet y tambien el useState de React.</p>
      <p className="mb-4 text-zinc-300 leading-relaxed"><strong>Inicialización del SDK</strong>: Llamamos a initMercadoPago con nuestra API_KEY(que hay que conseguirla desde el panel de mercadoPago) y la configuración regional. Esto prepara todo para que el SDK funcione correctamente en nuestra app.</p>
      <p className="mb-4 text-zinc-300 leading-relaxed"><strong>preferenceId</strong>: Creamos un estado con useState para guardar el id de la preferencia. Cuando enviamos la información de nuestro producto al backend, Mercado Pago toma esos datos y genera una preferencia de pago. A cambio, nos devuelve un id único que representa esa preferencia.

        Ese id es clave: es el que usamos cuando queremos mostrar el botón de pago con Checkout Pro, y le dice a Mercado Pago qué producto mostrar, con qué precio y cantidad.</p>
      <p className="mb-4 text-zinc-300 leading-relaxed"><strong>Función handleClick</strong>: En esta funcion hacemos un simple POST a nuestra api para enviarlos los datos de nuestro producto, para ello dentro del body de nuestro POST enviamos el title (nombre del producto), su precio y tambien su cantidad. Hay mas cosas que se podrian enviar al backend para que arme la preferencia pero estas son las cosas minimas que mercado pago necesita.

        Por ultimo en la constante data guardamos la respuesta que nos devuelve el backend(el preference id de nuestor producto) y lo guardamos en nuestro estado.</p>

      <p className="mb-4 text-zinc-300 leading-relaxed"><strong>Renderizado condicional del botón de pago</strong>: Si existe un preferenceId, mostramos el componente del SDK de Mercado Pago, que renderiza automáticamente el botón de pago con todos los datos cargados.

        Este componente es simple, pero hace todo lo necesario: conecta el frontend con el backend, y con Mercado Pago.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">3. Archivo route.ts – El Backend</h2>

      <pre className="mb-4 text-sm text-zinc-300 leading-relaxed overflow-auto">
        {`import { NextRequest } from 'next/server';
import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({
  accessToken: 'access_token',
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const preferenceData = {
      items: [
        {
          title: body.title,
          quantity: Number(body.quantity),
          unit_price: Number(body.price),
          currency_id: 'ARS',
        },
      ],
      back_urls: {
        success: 'https://www.youtube.com/@onthecode',
        failure: 'https://www.youtube.com/@onthecode',
        pending: 'https://www.youtube.com/@onthecode',
      },
      auto_return: 'approved',
    };

    const preference = new Preference(client);
    const result = await preference.create({ body: preferenceData });

    return new Response(JSON.stringify({ id: result.id }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error al crear la preferencia:', error);
    return new Response(JSON.stringify({ error: 'Error al crear la preferencia :(' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}`}
      </pre>

      <p className="mb-4 text-zinc-300 leading-relaxed"><strong>Inicialización del cliente de Mercado Pago: </strong>
        Usamos MercadoPagoConfig para crear una instancia del cliente, pasándole nuestro accessToken
        (la clave secreta que obtenés desde tu cuenta de Mercado Pago).
        Con eso ya podemos hacer llamadas seguras al servicio desde el backend.
      </p>

      <p className="mb-4 text-zinc-300 leading-relaxed"><strong>Función POST: </strong>
        Esta función se activa cuando el frontend hace una petición a /api/mercadopago.
        Recibimos los datos del producto desde el cuerpo del request: título, precio y cantidad.
      </p>

      <p className="mb-4 text-zinc-300 leading-relaxed"><strong>Armado de la preferencia: </strong>
        Con esos datos, creamos un objeto llamado preferenceData. Acá le pasamos todo lo que necesita Mercado Pago para armar el checkout:

        Los items (producto, precio, cantidad, moneda). Las back_urls, que son las URLs adonde redirigir al usuario después del pago (sea exitoso, fallido o pendiente). Y auto_return: &apos;approved&apos;, que hace que el usuario vuelva automáticamente cuando el pago se aprueba.</p>

      <p className="mb-4 text-zinc-300 leading-relaxed"><strong>Creación de la preferencia: </strong>
        Con new Preference(client).create(...) mandamos los datos a Mercado Pago.
        Si todo sale bien, nos devuelve un id, que es la preferencia de pago ya lista.
      </p>

      <p className="mb-4 text-zinc-300 leading-relaxed"><strong>Respuesta al frontend: </strong>
        Devolvemos ese id al frontend en formato JSON. Con eso, el botón de pago ya sabe qué mostrar.
      </p>

      <p className="mb-4 text-zinc-300 leading-relaxed"><strong>Manejo de errores: </strong>
        Si algo sale mal, lo mostramos en consola y devolvemos una respuesta con error. Así evitamos que la app se rompa sin explicación.

        <p>Con esto ya deberíamos tener lista la pasarela de pago con Checkout Pro, usando los datos de nuestro producto. Al hacer clic en el botón Pagar, se genera la preferencia y se renderiza automáticamente el botón de Mercado Pago.</p>

        Al presionar ese botón, nos lleva directo al flujo de pago, donde el usuario va a ver el producto con su precio, cantidad y podrá completar la compra.
      </p>

      <img
        src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/b5q4n35plkw663cr11wo.png"
        alt="pantalla de checkout pro"
        className="mb-6"
      />

      <p className="mb-4 text-zinc-300 leading-relaxed">
        Antes de cerrar, no quiero dejar de recomendarte un video que te puede ayudar mucho a configurar el ambiente de pruebas de Mercado Pago. En ese video te muestro cómo crear tu app desde el panel de desarrollador, cómo generar las credenciales necesarias (la public_key para el frontend y la access_token o secret_key para el backend), y también cómo crear cuentas de prueba para simular pagos.
      </p>

      <div className="aspect-video mb-4">
        <iframe
          src="https://www.youtube.com/embed/gCcCicCDJgo?start=429"
          title="YouTube video"
          className="w-full h-full"
          allowFullScreen
        ></iframe>
      </div>

      <p className="mb-4 text-zinc-300 leading-relaxed">
        📦 El código completo lo podés encontrar en la seccion codigos de esta documentación.
      </p>
      <p className="mb-4 text-zinc-300 leading-relaxed">
        No te olvides de dejarme una estrella en el repo ⭐️ 😊
      </p>

      <NextButton
        href="/docs/checkout-pro/webhooks"
        label="Siguiente: Checkout Pro - Webhooks"
      />
    </div>
  );
}
