"use client";

import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const FormularioANSES = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };

  const generatePDF = async () => {
    if (formRef.current === null) return;

    const canvas = await html2canvas(formRef.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgProps = {
      width: pageWidth,
      height: (canvas.height * pageWidth) / canvas.width,
    };

    pdf.addImage(imgData, "PNG", 0, 0, imgProps.width, imgProps.height);
    pdf.save("Formulario-ANSES-2.61.pdf");
  };

  return (
    <div className="flex items-center justify-center p-6 bg-gray-50 min-h-screen">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8" ref={formRef}>
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold uppercase">ANSES</h1>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm">Frente I</span>
            <span className="text-sm font-medium">Form. PS.2.61</span>
          </div>
          <h2 className="text-lg mt-4 font-medium">Notificación del Régimen de Asignaciones Familiares</h2>
          <h2 className="text-lg font-medium">Sistema Único de Asignaciones Familiares</h2>
          <p className="text-xs mt-2 italic">
            Este Formulario reviste carácter de Declaración Jurada y se debe completar en letra de imprenta, sin tachaduras ni enmiendas
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* RUBRO I - DATOS DEL TRABAJADOR */}
          <div className="mb-8 border border-gray-300 p-4 rounded">
            <h3 className="font-bold text-lg mb-4">RUBRO I – DATOS DEL TRABAJADOR</h3>
            <p className="text-sm italic mb-4">(a completar por todos los trabajadores con o sin cargas de familia)</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium mb-1">Apellido y Nombre Completo</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded uppercase" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Fecha de Nacimiento</label>
                <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nacionalidad</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">CUIL</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Tipo y N° Doc</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Sexo</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded" required>
                  <option value="">Seleccionar</option>
                  <option value="M">Masculino</option>
                  <option value="F">Femenino</option>
                  <option value="O">Otro</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Estado Civil</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded" required>
                <option value="">Seleccionar</option>
                <option value="soltero">Soltero/a</option>
                <option value="casado">Casado/a</option>
                <option value="divorciado">Divorciado/a</option>
                <option value="viudo">Viudo/a</option>
                <option value="concubinato">Unión Convivencial</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Domicilio - Calle - Número</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded uppercase" required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Piso</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Depto.</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Código Postal</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Localidad</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded uppercase" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Provincia</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded uppercase" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Teléfono</label>
                <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded" required />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Dirección de Correo Electrónico</label>
                <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded" required />
              </div>
            </div>
          </div>

          {/* RUBRO II - DATOS DEL EMPLEADOR */}
          <div className="mb-8 border border-gray-300 p-4 rounded">
            <h3 className="font-bold text-lg mb-4">RUBRO II – DATOS DEL EMPLEADOR</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Razón Social</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded uppercase" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">CUIT</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded" required />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Domicilio - Calle - Número</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded uppercase" required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Piso</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Depto.</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Código Postal</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Localidad</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded uppercase" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Provincia</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded uppercase" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Teléfono</label>
                <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded" required />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Dirección de Correo Electrónico</label>
                <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded" required />
              </div>
            </div>
          </div>

          {/* Declaración */}
          <div className="mb-8 text-sm">
            <p className="mb-2">
              Dejo constancia, por medio de la presente, que en el día de la fecha, me he notificado de las normas básicas y principales derechos que me asisten con relación al Régimen de Asignaciones Familiares y que surgen del cuadro existente al dorso de la presente, recibiendo copia, en este acto, de la Ley N° 24.714, sus normas reglamentarias y de la Resolución ANSES N° 292/08 y sus modificatorias. Asimismo, me notifico que los trámites para solicitar la liquidación y pago de las Asignaciones Familiares que me correspondan deberé realizarlos personalmente o a través de un "Representante" designado por mí para tal fin, dentro de los plazos que surgen del cuadro existente al dorso de la presente, en cualquiera de las Unidades de Atención de ANSES, presentando -cuando corresponda-, debidamente confeccionados, los Formularios respectivos y la documentación que en cada caso se detalla, además de la que adicionalmente me pudiera ser requerida. Tomo conocimiento, además, que cualquier reclamo deberé formularlo personalmente ante ANSES dentro de los plazos de caducidad establecidos por la normativa vigente, presentando el Formulario PS.2.72 "Reclamos Generales para los Sistemas SUAF y UVHI", debidamente cumplimentado.
            </p>
            <p className="mb-2">
              Dejo constancia también, que asumo el compromiso de notificar a mi empleador toda novedad/modificación que se produzca con relación a mis cargas y relaciones de familia, acompañando la documentación que las acredite, a efectos de que éste las informe a ANSES a través del Programa de Simplificación Registral. Me comprometo a informar a ANSES el medio de pago a través del cual deseo percibir las Asignaciones Familiares. Finalmente me notifico que todos los datos que aporte a ANSES personalmente, a través de un "Representante" o de mi Empleador, para la percepción de las Asignaciones Familiares, tendrán carácter de Declaración Jurada, reconociendo el derecho de ANSES a reclamarme su restitución o compensar automáticamente los importes con otras asignaciones en caso de percepción indebida de mi parte, sin necesidad de notificación previa por parte del citado Organismo.
            </p>
          </div>

          {/* Firma y lugar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <p className="border-t border-gray-400 pt-8">Localidad, ...... de ...... de ......</p>
            </div>
            <div className="text-center">
              <p className="border-t border-gray-400 pt-8">Firma/Aclaración de Firma del Trabajador</p>
              <input type="file" className="mt-2 mx-auto" accept="image/*" />
            </div>
            <div className="text-center">
              <p className="border-t border-gray-400 pt-8">Firma/Aclaración de Firma y Sello del Empleador</p>
              <input type="file" className="mt-2 mx-auto" accept="image/*" />
            </div>
          </div>

          <div className="text-center text-sm mb-8">
            <p>Ministerio de Trabajo, Empleo y Seguridad Social</p>
          </div>

          {/* Botones */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">

            <button 
              type="button" 
              onClick={generatePDF}
              className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Generar PDF
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioANSES;