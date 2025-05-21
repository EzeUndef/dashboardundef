/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';

interface FacultyCardProps {
  title: string;
  text: string;
  link: string;
  image: string;
}

const cards: FacultyCardProps[] = [
  {
    title: 'Fadena',
    text: 'Gestión de usuarios',
    link: 'http://guarani.fadena.undef.edu.ar/app/',
    image: '/images/fadena.png',
  },
  {
    title: 'Fadena',
    text: 'Autogestion Alumnos',
    link: 'http://autogestion.fadena.undef.edu.ar/3w/',
    image: '/images/fadena.png'
  },
  {
    title: 'Fadena',
    text: 'Autogestion Rectorado',
    link: 'http://autogestion.rectorado.undef.edu.ar/3w/',
    image: '/images/fadena.png'
  },
  {
    title: 'Fadena',
    text: 'Sobre Fadena',
    link: 'https://campus.fadena.undef.edu.ar/',
    image: '/images/fadena.png'
  },
  {
    title: 'Fadena',
    text: 'Preinscripcion alumnos',
    link: 'http://preinscripcion.fadena.undef.edu.ar/p/',
    image: '/images/fadena.png'
  },
  {
    title: 'Fadena',
    text: 'Preinscripcion Rectorado',
    link: 'http://preinscripcion.rectorado.undef.edu.ar/p/',
    image: '/images/fadena.png'
  },
    {
    title: 'Fadena',
    text: 'Sistemas Fadena',
    link: 'http://sistemas.fadena.undef.edu.ar/',
    image: '/images/fadena.png'
  },
      {
    title: 'Fadena',
    text: 'Test Fadena',
    link: 'http://test.fadena.undef.edu.ar/app/',
    image: '/images/fadena.png'
  },  
];

const Lista = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 gap-12 justify-items-center">
        {cards.map((card, index) => (
          <a key={index} href={card.link} className="no-underline">
            <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 w-56 h-64 text-center flex flex-col items-center justify-start">
              <img
                src={card.image}
                alt={card.title}
                className="w-auto h-auto mt-7 mr-8"
              />
              <h3 className="text-black text-xl font-bold mt-4">{card.title}</h3>
              <p className="text-black text-sm font-semibold mt-4">{card.text}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Lista;
