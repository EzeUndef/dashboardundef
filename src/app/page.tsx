
'use client'
import Calendar from './components/Calendar';
import Lista from './components/lista';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100 bg-repeat flex flex-col">

      {/* Header */}
      <header className="border-b-2 border-black p-4 bg-cyan-200 bg-repeat">
        
      </header>

      {/* Contenedor de los asides centrados */}
      <div className="flex justify-center flex-1 items-center gap-4">
        {/* Aside Izquierdo */}
        <aside className="w-60 mr-60 mt-20 mb-20">
          <Lista />
        </aside>

        {/* Aside Derecho */}
        <aside className="w-60 pl-4">
          <Calendar />          
        </aside>
      </div>

      {/* Footer */}
      <footer className="border-t-2  bg-gray-600 bg-repeat border-black p-48">
        
      </footer>
    </div>
  );
}
