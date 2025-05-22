'use client';
import React, { useState } from 'react';
import cardData from '@/data/data.json';

export default function Codes() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedCard = cardData[selectedIndex];

  return (
    <div className="flex justify-center px-6 py-10 bg-zinc-900 min-h-screen">
      <div className="w-full max-w-3xl bg-zinc-800 rounded-2xl shadow-lg p-6 text-white">

        <div className="text-center">
          <p className="text-lg font-semibold mb-4">Selecciona tu código ⭐️</p>
        </div>

        <select
          className="w-full mb-6 p-3 rounded-lg border border-zinc-700 bg-zinc-900 text-white"
          value={selectedIndex}
          onChange={(e) => setSelectedIndex(Number(e.target.value))}
        >
          {cardData.map((card, index) => (
            <option value={index} key={index} className="text-black">
              {card.title}
            </option>
          ))}
        </select>

        <h1 className="text-3xl font-bold mb-6 text-center">{selectedCard.title}</h1>

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
            src={selectedCard.youtubeId}
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

        <div className="flex flex-col items-center mt-6">
          <a
            href="https://ondecode.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 hover:bg-pink-700 transition text-xl font-semibold px-8 py-4 rounded-xl w-full max-w-xs text-center"
          >
            Donar ❤️
          </a>
          <p className="text-sm text-zinc-300 mt-4 mt-2">
            • Si mi contenido te ayudó, una donación, por pequeña que sea, me ayuda muchísimo a seguir creando contenido gratuito 🙌 Gracias.
          </p>
        </div>

        <div className="mt-8 text-left">
          <a
            href={selectedCard.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 font-medium underline"
          >
            • Ver código en GitHub
          </a>
          <p className="text-sm text-zinc-300 mt-2">• Dejame una estrella ⭐️</p>
        </div>
      </div>
    </div>
  );
}
