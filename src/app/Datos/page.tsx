'use client';

import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import "../PersonalDataForm.css";


const PersonalDataForm: React.FC = () => {
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
      pdf.save("formulario_datos_personales.pdf");
    });
  };

  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper" ref={formRef}>
        <form onSubmit={handleSubmit}>
          <div className="formbold-header">
            <h1 className="formbold-form-title">FORMULARIO DE DATOS PERSONALES</h1>
          </div>

          {/* DATOS PERSONALES */}
          <div className="formbold-section">
            <h2 className="formbold-section-title">DATOS PERSONALES</h2>
            <div className="formbold-input-flex">
              <div>
                <label htmlFor="apellido-nombre" className="formbold-form-label">
                  APELLIDO Y NOMBRE*
                </label>
                <input
                  type="text"
                  name="apellido-nombre"
                  id="apellido-nombre"
                  className="formbold-form-input"
                  required
                />
              </div>
              <div>
                <label htmlFor="estado-civil" className="formbold-form-label">
                  ESTADO CIVIL*
                </label>
                <select
                  name="estado-civil"
                  id="estado-civil"
                  className="formbold-form-input"
                  required
                >
                  <option value="">Seleccionar</option>
                  <option value="soltero">Soltero/a</option>
                  <option value="casado">Casado/a</option>
                  <option value="divorciado">Divorciado/a</option>
                  <option value="viudo">Viudo/a</option>
                </select>
              </div>
            </div>

            <div className="formbold-input-flex">
              <div>
                <label htmlFor="dni" className="formbold-form-label">DNI*</label>
                <input type="text" name="dni" id="dni" className="formbold-form-input" required />
              </div>
              <div>
                <label htmlFor="cuit" className="formbold-form-label">CUIT*</label>
                <input type="text" name="cuit" id="cuit" className="formbold-form-input" required />
              </div>
              <div>
                <label htmlFor="nacionalidad" className="formbold-form-label">NACIONALIDAD*</label>
                <input type="text" name="nacionalidad" id="nacionalidad" className="formbold-form-input" required />
              </div>
            </div>

            <div className="formbold-input-flex">
              <div>
                <label htmlFor="fecha-nacimiento" className="formbold-form-label">
                  FECHA DE NACIMIENTO*
                </label>
                <input type="date" name="fecha-nacimiento" id="fecha-nacimiento" className="formbold-form-input" required />
              </div>
              <div>
                <label className="formbold-form-label">SEXO*</label>
                <div className="formbold-radio-group">
                  <label className="formbold-radio-label">
                    <input type="radio" name="sexo" value="F" required /> F
                  </label>
                  <label className="formbold-radio-label">
                    <input type="radio" name="sexo" value="M" /> M
                  </label>
                  <label className="formbold-radio-label">
                    <input type="radio" name="sexo" value="X" /> X
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* DOMICILIO */}
          <div className="formbold-section">
            <h2 className="formbold-section-title">DOMICILIO</h2>
            <div className="formbold-mb-3">
              <label htmlFor="calle" className="formbold-form-label">CALLE*</label>
              <input type="text" name="calle" id="calle" className="formbold-form-input" required />
            </div>

            <div className="formbold-input-flex">
              <div style={{ width: "20%" }}>
                <label htmlFor="numero" className="formbold-form-label">N°*</label>
                <input type="text" name="numero" id="numero" className="formbold-form-input" required />
              </div>
              <div style={{ width: "20%" }}>
                <label htmlFor="piso" className="formbold-form-label">PISO</label>
                <input type="text" name="piso" id="piso" className="formbold-form-input" />
              </div>
              <div style={{ width: "20%" }}>
                <label htmlFor="dpto" className="formbold-form-label">DPTO</label>
                <input type="text" name="dpto" id="dpto" className="formbold-form-input" />
              </div>
            </div>

            <div className="formbold-mb-3">
              <label htmlFor="localidad" className="formbold-form-label">LOCALIDAD*</label>
              <input type="text" name="localidad" id="localidad" className="formbold-form-input" required />
            </div>

            <div className="formbold-input-flex">
              <div>
                <label htmlFor="provincia" className="formbold-form-label">PROVINCIA*</label>
                <input type="text" name="provincia" id="provincia" className="formbold-form-input" required />
              </div>
              <div>
                <label htmlFor="cp" className="formbold-form-label">CP*</label>
                <input type="text" name="cp" id="cp" className="formbold-form-input" required />
              </div>
            </div>

            <div className="formbold-input-flex">
              <div>
                <label htmlFor="telefono" className="formbold-form-label">TELÉFONO*</label>
                <input type="tel" name="telefono" id="telefono" className="formbold-form-input" required />
              </div>
              <div>
                <label htmlFor="movil" className="formbold-form-label">MÓVIL</label>
                <input type="tel" name="movil" id="movil" className="formbold-form-input" />
              </div>
            </div>

            <div className="formbold-mb-3">
              <label htmlFor="email" className="formbold-form-label">CORREO ELECTRÓNICO*</label>
              <input type="email" name="email" id="email" className="formbold-form-input" required />
            </div>
          </div>

          {/* DECLARACIONES */}
          <div className="formbold-section">
            <h2 className="formbold-section-title">
              CONSTITU DE DOMICILIO Y DECLARA DE CORREO ELECTRÓNICO
            </h2>
            <div className="formbold-declaration">
              <p>El firmante manifiesta, en carácter de declara jurada, que constituye domicilio en aquel expuesto en el presente formulario...</p>
              <p>El firmante declara como medio de notifica digital fehaciente al correo electrónico provisto en el presente formulario...</p>
              <p className="formbold-declaration-bold">
                DECLARO QUE TODOS LOS DATOS CONSIGNADOS SON CORRECTOS Y SIN OMISIONES...
              </p>
              <ul className="formbold-declaration-list">
                <li>Declara jurada de incompatibilidades, inhabilidades y conflictos de intereses...</li>
                <li>Declara Jurada de cargos y actividades.</li>
                <li>Declara jurada de personas integrantes del grupo familiar.</li>
                <li>Diplomas de Estudios.</li>
              </ul>
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

          <div className="formbold-checkbox-wrapper">
            <input
              type="checkbox"
              id="declaracion-jurada"
              className="formbold-checkbox"
              required
            />
            <label htmlFor="declaracion-jurada" className="formbold-checkbox-label">
              Confirmo que toda la informa proporcionada es verídica y acepto las condiciones establecidas.
            </label>
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

export default PersonalDataForm;
