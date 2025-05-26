/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface FacultyCardProps {
  title: string;
  text: string;
  description?: string;
  link: string;
  image: string;
}


interface ListaProps {
  cards?: FacultyCardProps[];
}

const Lista = ({ cards = [] }: ListaProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {cards.length === 0 ? (
          <p>No hay tarjetas para mostrar.</p>
        ) : (
          cards.map((card, index) => (
            <a key={index} href={card.link} className="no-underline">
              <div className="bg-zinc-200 rounded-xl p-6 shadow-2xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 w-64 h-64 text-center flex flex-col items-center justify-start">
                {/* Icono pequeño */}
                <img
                  src={card.image}
                  className="w-h-24 h-24 mb-4"
                />
                <h3 className="text-black text-sm font-bold mb-2">{card.text}</h3>
                {card.description && (
                  <p className="text-gray-500 text-xs mt-1">{card.description}</p>
                )}

              </div>
            </a>
          ))
        )}
      </div>
    </div>
  );
};

export default Lista;
