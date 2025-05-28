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
            <a
              key={index}
              href={card.link}
              className="no-underline"
              style={{ textDecoration: 'none' }} // asegura que no haya subrayado
            >
              <div className="bg-sky-500 rounded-xl p-6 shadow-emerald-950 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 w-64 h-64 text-center flex flex-col items-center justify-start">
                <img
                  src={card.image}
                  className="w-28 h-24 mb-4"
                />
                <h3
                  className="text-white text-sm font-bold mb-2"
                  style={{ textDecoration: 'none' }}
                >
                  {card.text}
                </h3>
                {card.description && (
                  <p
                    className="text-white text-xs"
                    style={{ textDecoration: 'none' }}
                  >
                    {card.description}
                  </p>
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
