'use client'

import { Raleway } from 'next/font/google';
import Calendar from './components/Calendar';
import Lista from './components/lista';
import 'bootstrap/dist/css/bootstrap.min.css';
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
      <div className="flex justify-center flex-1 items-start gap-96 w-full max-w-6xl mx-auto mt-20">
        {/* Aside Izquierdo: Lista */}
        <aside className="w-full max-w-lg ">
          <Lista />
        </aside>

        {/* Aside Derecho: Calendar */}
        <aside className="w-full max-w-lg">
          <Calendar />
        </aside>
      </div>

      {/* Footer */}
      <footer className="border-t-2 bg-gray-600 bg-repeat border-black p-24">
        {/* Contenido del footer */}
      </footer>
    </div>
  );
}
