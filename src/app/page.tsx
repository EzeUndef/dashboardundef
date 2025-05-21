'use client'

import { Raleway } from 'next/font/google';
import Calendar from './components/Calendar';
import Lista from './components/lista';
import Header from './components/header';

// Importa y configura la fuente
const raleway = Raleway({ subsets: ['latin'], weight: ['100', '400', '700', '900'] });

export default function Home() {
  return (
    <div className={`${raleway.className} min-h-screen bg-zinc-100 bg-repeat flex flex-col`}>
      {/* Header */}
      <header className="p-4 bg-white bg-repeat">
        <Header />
      </header>

      {/* Contenedor principal para Lista y Calendar */}
      <div className="flex flex-1 justify-between w-full max-w-6xl mx-auto mt-20 px-4">
        {/* Aside Izquierdo: Lista */}
        <aside className="w-full max-w-lg">
          <Lista />
        </aside>

        {/* Aside Derecho: Calendar */}
        <aside className="w-full max-w-lg -mr-60">
          <Calendar />
        </aside>
      </div>

      {/* Footer */}
      <footer className="bg-gray-600 bg-repeat border-black p-16">
        {/* Contenido del footer */}
      </footer>
    </div>
  );
}