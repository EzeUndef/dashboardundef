'use client'

import { Raleway } from 'next/font/google';
import Calendar from './components/Calendar';
import Lista from './components/lista';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import { Carrousel } from './components/Carrousel';



// Importa y configura la fuente
const raleway = Raleway({ subsets: ['latin'], weight: ['100', '400', '700', '900'] });

export default function Home() {
  return (
    <div className={`${raleway.className} min-h-screen bg-zinc-100 bg-repeat flex flex-col`}>

      {/* Header */}
      <header className="p-4 bg-white bg-repeat">
        <Header />
      </header>

      {/* Contenedor de los asides centrados */}
      <div className="flex justify-center flex-1 items-center gap-4">
        {/* Aside Izquierdo */}
        <aside className="w-60 mr-60 mt-20 mb-20">
          <Lista />
        </aside>

        {/* Aside Derecho */}
        <aside className="w-60 pl-4">
          <Carrousel />
          <Calendar />          
        </aside>
      </div>

      {/* Footer */}
      <footer className="border-t-2 bg-gray-600 bg-repeat border-black p-24">
        {/* Puedes agregar contenido del footer aquí */}
      </footer>
    </div>
  );
}
