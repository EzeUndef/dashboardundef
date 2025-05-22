/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/header";
import BasicExample from "./components/Navbar"; // O el nombre real de tu navbar
import React from "react";


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
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
    {[
      {
        name: "FADENA",
        address: "Maipú 262, CABA",
        map: "https://maps.app.goo.gl/FEbsK6EKJUEGhcyE9",
      },
      {
        name: "FADARA",
        address: "Francisco N. de Laprida 555, Vicente López",
        map: "https://maps.app.goo.gl/9JcnTw91pyCPjsi16",
      },
      {
        name: "Escuela de Aviación Militar",
        address: "Av. Fuerza Aérea Argentina 5011, Córdoba",
        map: "https://maps.app.goo.gl/FpDwZP3nJoQdNoBZ7",
      },
      {
        name: "Escuela Naval Militar",
        address: "Río Santiago, Provincia de Buenos Aires",
        map: "https://maps.app.goo.gl/pduqpiDU2G79iZ5K6",
      },
      {
        name: "Escuela de Ciencias del Mar",
        address: "Av Antártida Argentina 425 - (Ex -1201)",
        map: "https://maps.app.goo.gl/9g9XLugvSSCNwcQW6",
      },
      {
        name: "Facultad de la Fuerza Aerea",
        address: "Viamonte 153, CABA",
        map: "https://maps.app.goo.gl/L4hHxHHits9kSDkZ9",
      },
            {
        name: "Facultad Militar Conjunta",
        address: "Savio 235, CABA",
        map: "https://maps.app.goo.gl/L4hHxHHits9kSDkZ9",
      },
                  {
        name: "UNDEF",
        address: "Maipú 262, CABA",
        map: "https://maps.app.goo.gl/FEbsK6EKJUEGhcyE9",
      },
    ].map((faculty, index) => (
      <div key={index} className="flex items-start space-x-4">
        <img src="/images/icono.png" alt={`Icono ${faculty.name}`} className="w-8 h-8 mt-1" />
        <div>
          <h3 className="text-base font-bold">{faculty.name}</h3>
          <p className="text-sm">{faculty.address}</p>
          <a
            href={faculty.map}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:underline text-xs"
          >
            Ver en Google Maps
          </a>
        </div>
      </div>
    ))}
  </div>
</footer>
      </body>
    </html>
  );
}
