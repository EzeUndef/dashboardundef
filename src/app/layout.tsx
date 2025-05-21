import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/header";
import BasicExample from "./components/Navbar"; // O el nombre real de tu navbar


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard Undef",
  description: "Defende tu futuro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-100 min-h-screen flex flex-col`}>
        {/* Header global */}
        <header className="p-4 bg-white">
          <Header />
        </header>

        {/* Navbar global */}
        <BasicExample />

        {/* Contenido de cada página */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer global */}
<footer className="bg-gray-600 text-white p-16">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Facultad 1 */}
    <div className="flex items-start space-x-4">
      <img src="/images/icono.png" alt="Icono FADENA" className="w-12 h-12 mt-1" />
      <div>
        <h3 className="text-lg font-bold">FADENA</h3>
        <p>Maipú 262,CABA</p>
        <a
          href="https://maps.app.goo.gl/FEbsK6EKJUEGhcyE9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:underline text-sm"
        >
          Ver en Google Maps
        </a>
      </div>
    </div>

    {/* Facultad 2 */}
    <div className="flex items-start space-x-4">
      <img src="/images/icono.png" alt="Icono FADARA" className="w-12 h-12 mt-1" />
      <div>
        <h3 className="text-lg font-bold">FADARA</h3>
        <p>Francisco N. de Laprida 555 Vicente López, CP 1638, Provincia de Buenos Aires, </p>
        <a
          href="https://maps.app.goo.gl/9JcnTw91pyCPjsi16"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:underline text-sm"
        >
          Ver en Google Maps
        </a>
      </div>
    </div>

    {/* Facultad 3 (ejemplo genérico) */}
    <div className="flex items-start space-x-4">
      <img src="/images/icono.png" alt="Icono FAMET" className="w-12 h-12 mt-1" />
      <div>
        <h3 className="text-lg font-bold">FAMET</h3>
        <p>Base Aérea Militar Morón, Buenos Aires</p>
        <a
          href="https://www.google.com/maps?q=Base+Aerea+Militar+Moron"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:underline text-sm"
        >
          Ver en Google Maps
        </a>
      </div>
    </div>
  </div>
</footer>

      </body>
    </html>
  );
}
