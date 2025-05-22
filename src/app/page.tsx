'use client';

import { Raleway } from 'next/font/google';
import Calendar from './components/Calendar';
import LoginForm from './components/login';

const raleway = Raleway({ subsets: ['latin'], weight: ['100', '400', '700', '900'] });

// Simulación temporal de usuario NO autenticado
const isAuthenticated = false;

export default function Home() {
  if (!isAuthenticated) {
    return <LoginForm onLoginSuccess={function (): void {
      throw new Error('Function not implemented.');
    } } />;
  }

  return (
    <div className={`${raleway.className} flex flex-col px-4 py-8`}>
      <div className="flex flex-1 justify-between w-full max-w-6xl mx-auto">
        <aside className="w-full max-w-lg">
          <h1 className="text-3xl font-bold">Bienvenido al portal de la UNDEF</h1>
        </aside>
        <aside className="w-full max-w-lg -mr-60">
          <Calendar />
        </aside>
      </div>
    </div>
  );
}
