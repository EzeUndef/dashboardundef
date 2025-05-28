'use client';

import { Raleway } from 'next/font/google';
import Calendar from './components/Calendar';

const raleway = Raleway({ subsets: ['latin'], weight: ['100', '400', '700', '900'] });

export default function Home() {
  return (
    <div className={`${raleway.className} px-4 py-8`}>
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">


        <aside className="w-full lg:max-w-lg">
          <h1 className="text-3xl font-bold">Bienvenido al portal de la UNDEF</h1>
        </aside>


          <aside className="hidden md:block w-full max-w-lg -mr-60">
            <Calendar />
        </aside>

      </div>
    </div>
  );
}
