"use client";

import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const FormularioGrupoFamiliar = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [integrantes, setIntegrantes] = React.useState([
    { apellidoNombre: "", dni: "", parentesco: "" },
    { apellidoNombre: "", dni: "", parentesco: "" },
    { apellidoNombre: "", dni: "", parentesco: "" },
    { apellidoNombre: "", dni: "", parentesco: "" },
    { apellidoNombre: "", dni: "", parentesco: "" },
  ]);

  const handleIntegranteChange = (index: number, field: string, value: string) => {
    const newIntegrantes = [...integrantes];
    newIntegrantes[index] = { ...newIntegrantes[index], [field]: value };
    setIntegrantes(newIntegrantes);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado", integrantes);
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
    pdf.save("Formulario-Grupo-Familiar.pdf");
  };

  return (
    <div className="flex items-center justify-center p-6 bg-gray-50 min-h-screen">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8" ref={formRef}>
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-center mb-6 uppercase">FORMULARIO GRUPO FAMILIAR</h1>
          
          {/* Datos del declarante */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">APELLIDO Y NOMBRE</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md uppercase" 
                required 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">FECHA</label>
              <input 
                type="date" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                required 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">DNI</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                required 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">DEPENDENCIA</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md uppercase" 
                required 
              />
            </div>
          </div>

          {/* Tabla de integrantes */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">INTEGRANTES DEL GRUPO FAMILIAR DEL DECLARANTE</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-700">APELLIDO Y NOMBRE</th>
                    <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-700">DNI</th>
                    <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-700">PARENTESCO</th>
                  </tr>
                </thead>
                <tbody>
                  {integrantes.map((integrante, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b border-gray-200">
                        <input
                          type="text"
                          className="w-full px-2 py-1 border border-gray-300 rounded-md uppercase"
                          value={integrante.apellidoNombre}
                          onChange={(e) => handleIntegranteChange(index, "apellidoNombre", e.target.value)}
                        />
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200">
                        <input
                          type="text"
                          className="w-full px-2 py-1 border border-gray-300 rounded-md"
                          value={integrante.dni}
                          onChange={(e) => handleIntegranteChange(index, "dni", e.target.value)}
                        />
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200">
                        <input
                          type="text"
                          className="w-full px-2 py-1 border border-gray-300 rounded-md"
                          value={integrante.parentesco}
                          onChange={(e) => handleIntegranteChange(index, "parentesco", e.target.value)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Declaración jurada */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">DECLARACIÓN JURADA</h2>
            <p className="mb-4 text-sm">
              Declaro bajo juramento que la/s persona/s mencionadas en el formulario presente, integran mi grupo familiar,
              de las cuales adjunto documentación respaldatoria.
            </p>
            <p className="mb-4 text-sm font-medium">(*) Fotocopia de:</p>
            <ul className="list-disc pl-5 mb-4 text-sm">
              <li className="mb-1">Documento Nacional de Identidad.</li>
              <li className="mb-1">Partida de Matrimonio / Certificado de Convivencia para pareja o conyugue.</li>
              <li>Partida de Nacimiento / Acta de adopción para padres o hijos.</li>
            </ul>
          </div>

          {/* Firma y lugar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">LUGAR Y FECHA:</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md uppercase" 
                required 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">FIRMA:</label>
              <input 
                type="file" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                accept="image/*" 
              />
            </div>
          </div>

          {/* Aclaración */}


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

export default FormularioGrupoFamiliar;