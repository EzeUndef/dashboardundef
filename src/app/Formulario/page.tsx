'use client';

import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import "../PersonalDataForm.css";

const NotificacionFormulario: React.FC = () => {
  const formRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };

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
      pdf.save("notificacion_formulario_572.pdf");
    });
  };

  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper" ref={formRef}>
        <form onSubmit={handleSubmit}>
          <div className="formbold-header">
            <h1 className="formbold-form-title">
              FORMULARIO 572 ARCA Y DECLARACIÓN ACTIVIDADES SIMULTÁNEAS - NOTIFICACIÓN
            </h1>
          </div>

          <div className="formbold-section">
            <p className="formbold-declaration-text">
              Por la presente se hace saber a <input
                type="text"
                name="nombre"
                className="formbold-form-input inline-input"
                placeholder="Nombre completo"
                required
              />
              titular del DNI N° <input
                type="text"
                name="dni"
                className="formbold-form-input inline-input"
                placeholder="DNI"
                required
              />
            </p>
            <p className="formbold-declaration-text">
              a) La obligación de cumplir con lo dispuesto por el Artículo 11 de la Resolución General AFIP N° 2437, sus modificatorias y complementarias o por el Artículo 7° de la Resolución General N° 2.442 y su complementaria, según corresponda. Que en función a lo previsto en la Resolución General AFIP N° 3.418/2012, y en caso de ser un contribuyente comprendido en las Resoluciones Generales AFIP N° 2.437 y N° 2.442, sus modificatorias y complementarias deberá utilizar el servicio "Sistema de Registro y Actualización de Deducciones del Impuesto a las Ganancias (SiRADIG) - TRABAJADOR" en sustitución del formulario de declaración jurada F. 572. a los efectos de cumplimentar la presentación de la Declaración Jurada Régimen de Retenciones de cuarta categoría.
            </p>
            <p className="formbold-declaration-text">
              b) DECLARACION JURADA DE ACTIVIDADES SIMULTANEAS EN RELACION DE DEPENDENCIA: que en función a lo previsto en la Resolución General AFIP N° 2252, en el supuesto de simultaneidad de actividades en relación de dependencia para distintos empleadores  y siempre que por esos servicios se perciban remuneraciones que en su conjunto superen el límite máximo de SETENTA Y CINCO MOPRES el trabajador deberá informar mensualmente a uno o algunos de los empleadores el importe de remuneración bruta sobre el cual deberá abstenerse de retener los aportes con destino al Sistema Integrado de Jubilaciones y Pensiones (SIJP), mediante la presentación de la nota cuyo modelo se consigna en el Anexo III de la citada resolución.
            </p>

            <div className="formbold-input-flex" style={{ marginTop: "30px" }}>
              <div>
                <label htmlFor="lugar-fecha" className="formbold-form-label">LUGAR Y FECHA*</label>
                <input type="text" name="lugar-fecha" id="lugar-fecha" className="formbold-form-input" required />
              </div>
              <div>
                <label htmlFor="firma" className="formbold-form-label">FIRMA DEL NOTIFICADO*</label>
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

export default NotificacionFormulario;
