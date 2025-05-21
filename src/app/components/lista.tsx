/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';

interface FacultyCardProps {
  title: string;
  text: string;
  image: string;
  link: string;
}

const cards: FacultyCardProps[] = [
  {
    image: '/images/sales.jpg',
    title: 'test',
    text: '',
    link: '',
  },
  {
    image: '/images/users.jpg',
    title: 'test',
    text: '',
    link: '',
  },
  {
    image: '/images/orders.jpg',
    title: 'test',
    text: '',
    link: '',
  },
  {
    image: '/images/support.jpg',
    title: 'test',
    text: '',
    link: '',
  },
  {
    image: '/images/growth.jpg',
    title: 'test',
    text: '',
    link: '',
  },
  {
    image: '/images/traffic.jpg',
    title: 'test',
    text: '',
    link: '',
  },
];

const Lista = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
        {cards.map((card, index) => (
          <a key={index} href={card.link} className="no-underline">
            <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 w-56 h-52">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-auto object-cover rounded-md mb-20"
              />
              <h3 className="text-black text-xl font-bold">{card.title}</h3>
              <p className="text-black text-sm font-bold mt-1">{card.text}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Lista;
