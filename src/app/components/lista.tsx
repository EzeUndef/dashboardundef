/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface FacultyCardProps {
  title: string;
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
              <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 w-56 h-64 text-center flex flex-col items-center justify-start">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-auto h-auto mt-7 ml-5"
                />
                <h3 className="text-black text-xl font-bold mt-4">{card.title}</h3>
                <p className="text-black text-sm font-semibold mt-4">{card.text}</p>
              </div>
            </a>
          ))
        )}
      </div>
    </div>
  );
};

export default Lista;
