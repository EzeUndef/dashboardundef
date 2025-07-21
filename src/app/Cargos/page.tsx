"use client";

import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const DeclaracionCargos = () => {
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
    pdf.save("Declaracion-Cargos.pdf");
  };

  return (
    <div className="flex items-center justify-center p-12 bg-gray-50">
      <div className="mx-auto w-full max-w-4xl bg-white shadow-md rounded-lg p-8" ref={formRef}>
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-center mb-6">DECLARACIÓN JURADA DE CARGOS Y ACTIVIDADES</h1>
          
          {/* Sección 1: Datos personales */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">1. DATOS PERSONALES</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">D.N.I</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">CUIT - CUIL</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">En caso de no poseer estos documentos especifique su documentación</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Nacimiento</label>
                <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
            </div>
          </div>

          {/* Sección 2: Apellidos y nombres */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">2. APELLIDOS Y NOMBRES</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Apellidos</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombres (Escribir todos los nombres sin abreviaturas)</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
            </div>
          </div>

          {/* Sección 3: Datos de contacto */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">3. DATOS DE CONTACTO</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Calle</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">N°</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Localidad</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Código Postal</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Provincia</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4 md:col-span-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono móvil</label>
                <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Otro teléfono</label>
                <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
            </div>
          </div>

          {/* Sección 4: Datos laborales */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">4. DATOS RELACIONADOS CON LAS FUNCIONES, CARGOS Y OCUPACIONES</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="mb-4 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Ministerio, Secretaría de Estado, etc</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Calle</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">N°</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Localidad</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Provincia</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Repartición</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Funciones que desempeña</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Dependencia, Oficina, Facultad</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Ingreso</label>
                <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Cumple horario completo o reducido</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option value="completo">Completo</option>
                  <option value="reducido">Reducido</option>
                </select>
              </div>
              
              <div className="mb-4 flex items-center gap-2">
                <label className="block text-sm font-medium text-gray-700">De horas</label>
                <input type="time" className="px-3 py-2 border border-gray-300 rounded-md" />
                <label className="block text-sm font-medium text-gray-700">a</label>
                <input type="time" className="px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Sueldo o Retribución</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Imputación Presupuestaria</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
            </div>
          </div>

          {/* Sección 5: Otra repartición (ejemplo) */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">5. EN OTRA REPARTICIÓN NACIONAL, PROVINCIAL, Y/O MUNICIPAL</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="mb-4 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Ministerio, Secretaría de Estado, etc</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Calle</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">N°</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Localidad</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Provincia</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Repartición</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Funciones que desempeña</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Dependencia, Oficina, Facultad</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Ingreso</label>
                <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Cumple horario completo o reducido</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option value="completo">Completo</option>
                  <option value="reducido">Reducido</option>
                </select>
              </div>
              
              <div className="mb-4 flex items-center gap-2">
                <label className="block text-sm font-medium text-gray-700">De horas</label>
                <input type="time" className="px-3 py-2 border border-gray-300 rounded-md" />
                <label className="block text-sm font-medium text-gray-700">a</label>
                <input type="time" className="px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Sueldo o Retribución</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Imputación Presupuestaria</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
            </div>
            <div className="text-sm text-gray-500 italic">(Los mismos campos que en la sección 4)</div>
          </div>

          {/* Sección 7: Actividades no oficiales */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">7. EN TAREAS O ACTIVIDADES NO OFICIALES</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Empleador</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Lugar donde presta servicios</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Sueldo o Retribución</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Funciones que desempeña</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Horario que cumple</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Ingreso</label>
                <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
            </div>
          </div>

          {/* Sección 8: Pasividades */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">8. PERCEPCIÓN DE PASIVIDADES (Jubilaciones, Pensiones, Retiros, etc)</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Régimen</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Causa</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Institución o Caja que lo abona</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Desde que Fecha</label>
                <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Importe</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option value="activa">Percibe el beneficio</option>
                  <option value="suspendida">Suspendido a pedido</option>
                </select>
              </div>
            </div>
          </div>

          {/* Firma y sello */}
          <div className="mb-8">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Certifico que los datos consignados precedentemente son exactos y correctos</label>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Lugar y Fecha</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Firma y Sello del Jefe</label>
                <input type="file" className="w-full px-3 py-2 border border-gray-300 rounded-md" accept="image/*" />
              </div>
            </div>
          </div>

          {/* Botones */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button type="button" onClick={generatePDF} className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
              Generar PDF
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeclaracionCargos;