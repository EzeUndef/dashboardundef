'use client';

import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import "../PersonalDataForm.css";

const DeclaracionJuradaForm: React.FC = () => {
  const formRef = useRef<HTMLDivElement | null>(null);

  const generatePDF = () => {
    const input = formRef.current;

    if (!input) {
      console.error("Formulario no encontrado.");
      return;
    }

    const buttons = input.querySelectorAll(".formbold-button-group");
    buttons.forEach((btn) => {
      (btn as HTMLElement).style.display = "none";
    });

    html2canvas(input, {
      scale: 2,
      logging: false,
      useCORS: true,
      scrollY: -window.scrollY,
      windowWidth: document.documentElement.offsetWidth,
      windowHeight: document.documentElement.offsetHeight,
    }).then((canvas) => {
      buttons.forEach((btn) => {
        (btn as HTMLElement).style.display = "flex";
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("declaracion_jurada.pdf");
    });
  };

  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper" ref={formRef}>
        <form>
          <div className="formbold-section">
            <h2 className="formbold-section-title">DECLARACIONES JURADAS</h2>
            <div className="formbold-declaration">
              <p>
                <strong>ARTÍCULO 1° DECRETO N° 85/02 – ARTÍCULOS 13 a 16 LEY N°25.188:</strong><br />
                Declaro bajo juramento que no me encuentro comprendido/a en las normas sobre incompatibilidades,
                inhabilidades y conflictos de intereses para el ejercicio del cargo previstas en los artículos 13 a 16
                de la Ley N° 25.188 y sus modificaciones:
              </p>
              <p><strong>ARTICULO 13. —</strong> Es incompatible con el ejercicio de la función pública:</p>
              <p>
                a) dirigir, administrar, representar, patrocinar, asesorar, o, de cualquier otra forma, prestar servicios a quien gestione
                o tenga una concesión o sea proveedor del Estado, o realice actividades reguladas por éste, siempre que el cargo público
                desempeñado tenga competencia funcional directa, respecto de la contratación, obtención, gestión o control de tales concesiones,
                beneficios o actividades;
              </p>
              <p>
                b) ser proveedor por sí o por terceros de todo organismo del Estado en donde desempeñe sus funciones.
              </p>
              <p>
                <strong>ARTICULO 14. —</strong> Aquellos funcionarios que hayan tenido intervención decisoria en la planificación,
                desarrollo y concreción de privatizaciones o concesiones de empresas o servicios públicos, tendrán vedada su actuación
                en los entes o comisiones reguladoras de esas empresas o servicios, durante TRES (3) años inmediatamente posteriores a la
                última adjudicación en la que hayan participado.
              </p>
              <p>
                <strong>ARTICULO 15. —</strong> En el caso de que al momento de su designación el funcionario se encuentre alcanzado por
                alguna de las incompatibilidades previstas en el Artículo 13, deberá:
              </p>
              <p>
                a) Renunciar a tales actividades como condición previa para asumir el cargo.<br />
                b) Abstenerse de tomar intervención, durante su gestión, en cuestiones particularmente relacionadas con las personas o asuntos
                a los cuales estuvo vinculado en los últimos TRES (3) años o tenga participación societaria.
              </p>
              <p>
                <strong>ARTICULO 16. —</strong> Estas incompatibilidades se aplicarán sin perjuicio de las que estén determinadas en el régimen específico de cada función.
              </p>
            </div>

            <div className="formbold-input-flex" style={{ marginTop: "30px" }}>
              <div>
                <label htmlFor="lugar-fecha" className="formbold-form-label">LUGAR Y FECHA*</label>
                <input type="text" name="lugar-fecha" id="lugar-fecha" className="formbold-form-input" required />
              </div>
              <div>
                <label htmlFor="firma" className="formbold-form-label">FIRMA*</label>
                <input type="text" name="firma" id="firma" className="formbold-form-input" required />
              </div>
            </div>
          </div>

          <div className="formbold-button-group">
            <button
              type="button"
              className="formbold-btn formbold-btn-secondary"
              onClick={generatePDF}
            >
              DESCARGAR PDF
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeclaracionJuradaForm;
