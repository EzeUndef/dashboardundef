'use client';

import { Raleway } from 'next/font/google';
import Calendar from './components/Calendar';

const raleway = Raleway({ subsets: ['latin'], weight: ['100', '400', '700', '900'] });

export default function Home() {
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
