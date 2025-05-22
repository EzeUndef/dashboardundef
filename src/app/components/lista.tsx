/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface FacultyCardProps {
  text: string;
  link: string;
  image: string;
}

interface ListaProps {
  cards?: FacultyCardProps[]; // opcional
}

const Lista = ({ cards = [] }: ListaProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 gap-12 justify-items-center">
        {cards.length === 0 ? (
          <p>No hay tarjetas para mostrar.</p>
        ) : (
          cards.map((card, index) => (
            <a key={index} href={card.link} className="no-underline">
              <div className="border-2 bg-white rounded-xl p-6 shadow-xl hover:shadow-4xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 w-56 h-64 text-center flex flex-col items-center justify-start">
                <img
                  src={card.image}
                  className="w-36"
                />
                <p className="text-black text-md  font-semibold py-12">{card.text}</p>
              </div>
            </a>
          ))
        )}
      </div>
    </div>
  );
};

export default Lista;
