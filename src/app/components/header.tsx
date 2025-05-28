/* eslint-disable @next/next/no-img-element */
import React from "react";

const Header = () => {
  return (
    <header className="bg-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-start">
        {/* Logo a la izquierda */}
        <div className="logo">
          <a href="https://www.undef.edu.ar">
            <img
              src="https://www.undef.edu.ar/wp-content/themes/undefTheme/images/logoHeader_2024_claro.png"
              alt="UNDEF"
              width="237"
              className="block"
            />
          </a>
        </div>


        <div className="flex flex-col items-end space-y-2">
          {/* Redes sociales */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/UNDEF-940607396028588/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg"
                alt="Facebook"
                className="w-5 h-5"
              />
            </a>
            <a
              href="https://twitter.com/@UNDEFArgentina"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twitter.svg"
                alt="Twitter"
                className="w-5 h-5"
              />
            </a>
            <a
              href="https://www.instagram.com/undef.arg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg"
                alt="Instagram"
                className="w-5 h-5"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCNl-ZO0Tf7VTbZMtKf-Ax7g"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg"
                alt="YouTube"
                className="w-5 h-5"
              />
            </a>
            <a href="mailto:comunicacion.undef@undef.edu.ar">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/maildotru.svg"
                alt="Mail"
                className="w-5 h-5"
              />
            </a>
          </div>

          {/* Botonera */}
          <div className="flex space-x-4 text-sm font-medium text-gray-800">
            <a href="https://www.undef.edu.ar/boletin-nacional/">Boletín Nacional</a>
            <a href="https://www.undef.edu.ar/como-ingreso-a-las-ffaa/">¿Cómo ingreso a las FFAA?</a>
            <a href="https://www.undef.edu.ar/contacto/">Contacto</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
