"use client";
import { Image } from '@react-pdf/renderer';

import React, { useState } from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";



const generoOptions: string[] = ["F", "M", "X"];

// Registrar fuente (opcional)
Font.register({
  family: "Helvetica-Bold",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf",
});

// Estilos PDF
const styles = StyleSheet.create({
  page: {
    padding: 0,
    fontFamily: "Helvetica",
  },
  container: {
    width: "100%",
    maxWidth: 672,
    marginHorizontal: "auto",
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
  },
  header: {
    
    padding: 24,
    textAlign: "center",
  },
  title: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 5,
    color: "#000000",
  },
  formSection: {
    padding: 32,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "semibold",
    color: "#1f2937",
    marginBottom: 16,
    borderBottom: "1px solid #e5e7eb",
    paddingBottom: 8,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
  },
  inputGroup: {
    width: "50%",
    paddingRight: 12,
    marginBottom: 16,
  },
  inputGroupFull: {
    width: "100%",
    marginBottom: 16,
  },
  // Nuevo: para tres columnas en una fila
  inputGroupThird: {
    width: "33.33%",
    paddingRight: 12,
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    fontWeight: "medium",
    color: "#374151",
    marginBottom: 6,
  },
  inputText: {
    fontSize: 14,
    color: "#111827",
    border: "1px solid #d1d5db",
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  declarationText: {
    fontSize: 12,
    color: "#4b5563",
    lineHeight: 1.5,
    marginBottom: 12,
  },
  boldText: {
    fontWeight: "bold",
  },
  listItem: {
    flexDirection: "row",
    marginBottom: 6,
  },
  bullet: {
    width: 8,
    fontSize: 16,
    marginRight: 8,
  },
  signatureGrid: {
    flexDirection: "row",
    marginTop: 24,
    gap: 24,
  },
  signatureField: {
    width: "50%",
    marginBottom: 16,
  },
});

interface FormData {
  nombre: string;
  estadoCivil: string;
  dni: string;
  cuit: string;
  nacionalidad: string;
  fechaNacimiento: string;
  sexo: string;
  calle: string;
  numero: string;
  piso: string;
  dpto: string;
  localidad: string;
  provincia: string;
  cp: string;
  telefono: string;
  movil: string;
  email: string;
  lugarFecha: string;
  firma: string;
  aclaracion: string;
}

const MyDocument = ({ data }: { data: FormData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
<View style={styles.header}>
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
    }}
  >
    <Image
      style={{ width: 60, height: 60, marginRight: 12 }}
      src=""
    />
    <View>
      <Text style={styles.title}>FORMULARIO 1 - PERSONAL DE PLANTA</Text>
    </View>
  </View>
</View>


        <View style={styles.formSection}>
          <Text style={styles.sectionTitle}>DATOS PERSONALES</Text>
          <View style={styles.grid}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>APELLIDO Y NOMBRE *</Text>
              <Text style={styles.inputText}>
                {data.nombre || "................................."}
              </Text>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>ESTADO CIVIL *</Text>
              <Text style={styles.inputText}>
                {data.estadoCivil || "................................."}
              </Text>
            </View>
          </View>

          <View style={styles.grid}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>DNI *</Text>
              <Text style={styles.inputText}>
                {data.dni || "................................."}
              </Text>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>CUIT *</Text>
              <Text style={styles.inputText}>
                {data.cuit || "................................."}
              </Text>
            </View>
          </View>

          <View style={styles.grid}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>NACIONALIDAD *</Text>
              <Text style={styles.inputText}>
                {data.nacionalidad || "................................."}
              </Text>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>FECHA DE NACIMIENTO *</Text>
              <Text style={styles.inputText}>
                {data.fechaNacimiento || "................................."}
              </Text>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>SEXO *</Text>
            <Text style={styles.inputText}>{data.sexo}</Text>
          </View>

          <Text style={styles.sectionTitle}>DOMICILIO</Text>

          <View style={styles.inputGroupFull}>
            <Text style={styles.label}>CALLE *</Text>
            <Text style={styles.inputText}>
              {data.calle || "................................."}
            </Text>
          </View>

          <View style={styles.grid}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>NÚMERO *</Text>
              <Text style={styles.inputText}>{data.numero || "..."}</Text>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>PISO</Text>
              <Text style={styles.inputText}>{data.piso || "..."}</Text>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>DPTO</Text>
              <Text style={styles.inputText}>{data.dpto || "..."}</Text>
            </View>
          </View>

          {/* Aquí cambio para 3 columnas iguales */}
          <View style={styles.grid}>
            <View style={styles.inputGroupThird}>
              <Text style={styles.label}>LOCALIDAD *</Text>
              <Text style={styles.inputText}>
                {data.localidad || "................................."}
              </Text>
            </View>
            <View style={styles.inputGroupThird}>
              <Text style={styles.label}>PROVINCIA *</Text>
              <Text style={styles.inputText}>
                {data.provincia || "................................."}
              </Text>
            </View>
            <View style={styles.inputGroupThird}>
              <Text style={styles.label}>CÓDIGO POSTAL *</Text>
              <Text style={styles.inputText}>
                {data.cp || "................................."}
              </Text>
            </View>
          </View>

          <View
            style={{
              marginTop: 24,
              flexDirection: "row",
              flexWrap: "wrap",
              marginBottom: 16,
            }}
          >
            <View style={styles.inputGroup}>
              <Text style={styles.label}>TELÉFONO *</Text>
              <Text style={styles.inputText}>
                {data.telefono || "................................."}
              </Text>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>MÓVIL</Text>
              <Text style={styles.inputText}>
                {data.movil || "................................."}
              </Text>
            </View>
          </View>

          <View style={styles.inputGroupFull}>
            <Text style={styles.label}>CORREO ELECTRÓNICO *</Text>
            <Text style={styles.inputText}>
              {data.email || "................................."}
            </Text>
          </View>

          <Text style={styles.sectionTitle}>DECLARACIONES JURADAS</Text>

          <Text style={styles.declarationText}>
            El firmante manifiesta, en carácter de declaración jurada...
          </Text>

          <Text style={[styles.declarationText, styles.boldText]}>
            DECLARO QUE TODOS LOS DATOS CONSIGNADOS SON CORRECTOS...
          </Text>

          <View style={{ marginTop: 12 }}>
            {[
              "Declaración jurada de incompatibilidades...",
              "Declaración Jurada de cargos...",
              "Declaración jurada del grupo familiar...",
              "Diplomas de Estudios.",
            ].map((item, i) => (
              <View key={i} style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.declarationText}>{item}</Text>
              </View>
            ))}
          </View>

          <View style={styles.signatureGrid}>
            <View style={styles.signatureField}>
              <Text style={styles.label}>LUGAR Y FECHA *</Text>
              <Text style={styles.inputText}>
                {data.lugarFecha || "................................."}
              </Text>
            </View>
            <View style={styles.signatureField}>
              <Text style={styles.label}>FIRMA </Text>
              <Text style={styles.inputText}>
                {data.firma || "................................."}
              </Text>
            </View>
          </View>

          <View style={styles.signatureField}>
            <Text style={styles.label}>ACLARACIÓN</Text>
            <Text style={styles.inputText}>
              {data.aclaracion || "................................."}
            </Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

const PersonalDataForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    estadoCivil: "",
    dni: "",
    cuit: "",
    nacionalidad: "",
    fechaNacimiento: "",
    sexo: "",
    calle: "",
    numero: "",
    piso: "",
    dpto: "",
    localidad: "",
    provincia: "",
    cp: "",
    telefono: "",
    movil: "",
    email: "",
    lugarFecha: "",
    firma: "",
    aclaracion: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
        <div className=" p-6 text-center">
          <div className="flex items-center justify-center gap-4">
            {/* Logo - Reemplaza con tu imagen real */}
            <div className="bg-white p-2 rounded-lg">
              <img
                src="https://dangdai.com.ar/wp-content/uploads/sites/5/2023/03/undef.png"
                alt="Universidad de la Defensa Nacional"
                className="h-auto w-auto"
              />
            </div>
            <div>
              <h1 className="text-sm font-bold text-black">
                FORMULARIO 1 - PERSONAL DE PLANTA
              </h1>
            </div>
          </div>
        </div>

        <form className="p-6 md:p-8 space-y-6">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
              DATOS PERSONALES
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium text-gray-700"
                >
                  Apellido y Nombre *
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border--500 focus:ring focus:ring--200 focus:ring-opacity-50"
                />
              </div>

              <div>
                <label
                  htmlFor="estadoCivil"
                  className="block text-sm font-medium text-gray-700"
                >
                  Estado Civil *
                </label>
                <select
                  id="estadoCivil"
                  name="estadoCivil"
                  required
                  value={formData.estadoCivil}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border--500 focus:ring focus:ring--200 focus:ring-opacity-50"
                >
                  <option value="">Seleccionar</option>
                  <option value="Soltero/a">Soltero/a</option>
                  <option value="Casado/a">Casado/a</option>
                  <option value="Divorciado/a">Divorciado/a</option>
                  <option value="Viudo/a">Viudo/a</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="dni"
                  className="block text-sm font-medium text-gray-700"
                >
                  DNI *
                </label>
                <input
                  id="dni"
                  name="dni"
                  type="text"
                  required
                  value={formData.dni}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border--500 focus:ring focus:ring--200 focus:ring-opacity-50"
                />
              </div>

              <div>
                <label
                  htmlFor="cuit"
                  className="block text-sm font-medium text-gray-700"
                >
                  CUIT *
                </label>
                <input
                  id="cuit"
                  name="cuit"
                  type="text"
                  required
                  value={formData.cuit}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border--500 focus:ring focus:ring--200 focus:ring-opacity-50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="nacionalidad"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nacionalidad *
                </label>
                <input
                  id="nacionalidad"
                  name="nacionalidad"
                  type="text"
                  required
                  value={formData.nacionalidad}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border--500 focus:ring focus:ring--200 focus:ring-opacity-50"
                />
              </div>

              <div>
                <label
                  htmlFor="fechaNacimiento"
                  className="block text-sm font-medium text-gray-700"
                >
                  Fecha de Nacimiento *
                </label>
                <input
                  id="fechaNacimiento"
                  name="fechaNacimiento"
                  type="date"
                  required
                  value={formData.fechaNacimiento}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border--500 focus:ring focus:ring--200 focus:ring-opacity-50"
                />
              </div>
            </div>

            <fieldset>
              <legend className="block text-sm font-medium text-gray-700">
                Sexo *
              </legend>
              <div className="mt-2 flex gap-2">
                {generoOptions.map((option: string) => (
                  <label key={option} className="inline-flex items-center gap-1">
                    <input
                      type="radio"
                      name="sexo"
                      value={option}
                      checked={formData.sexo === option}
                      onChange={handleChange}
                      className="form-radio h-4 w-4 text--600"
                      required
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
              DOMICILIO
            </h2>

            <div>
              <label
                htmlFor="calle"
                className="block text-sm font-medium text-gray-700"
              >
                Calle *
              </label>
              <input
                id="calle"
                name="calle"
                type="text"
                required
                value={formData.calle}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border--500 focus:ring focus:ring--200 focus:ring-opacity-50"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="numero"
                  className="block text-sm font-medium text-gray-700"
                >
                  Número *
                </label>
                <input
                  id="numero"
                  name="numero"
                  type="text"
                  required
                  value={formData.numero}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border--500 focus:ring focus:ring--200 focus:ring-opacity-50"
                />
              </div>

              <div>
                <label
                  htmlFor="piso"
                  className="block text-sm font-medium text-gray-700"
                >
                  Piso
                </label>
                <input
                  id="piso"
                  name="piso"
                  type="text"
                  value={formData.piso}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border--500 focus:ring focus:ring--200 focus:ring-opacity-50"
                />
              </div>

              <div>
                <label
                  htmlFor="dpto"
                  className="block text-sm font-medium text-gray-700"
                >
                  Dpto
                </label>
                <input
                  id="dpto"
                  name="dpto"
                  type="text"
                  value={formData.dpto}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border--500 focus:ring focus:ring--200 focus:ring-opacity-50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
              <div>
                <label
                  htmlFor="localidad"
                  className="block text-sm font-medium text-gray-700"
                >
                  Localidad *
                </label>
                <input
                  id="localidad"
                  name="localidad"
                  type="text"
                  required
                  value={formData.localidad}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border--500 focus:ring focus:ring--200 focus:ring-opacity-50"
                />
              </div>

              <div>
                <label
                  htmlFor="provincia"
                  className="block text-sm font-medium text-gray-700"
                >
                  Provincia *
                </label>
                <input
                  id="provincia"
                  name="provincia"
                  type="text"
                  required
                  value={formData.provincia}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border--500 focus:ring focus:ring--200 focus:ring-opacity-50"
                />
              </div>

              <div>
                <label
                  htmlFor="cp"
                  className="block text-sm font-medium text-gray-700"
                >
                  Código Postal *
                </label>
                <input
                  id="cp"
                  name="cp"
                  type="text"
                  required
                  value={formData.cp}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border--500 focus:ring focus:ring--200 focus:ring-opacity-50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="telefono"
                  className="block text-sm font-medium text-gray-700"
                >
                  Teléfono *
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="text"
                  required
                  value={formData.telefono}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border--500 focus:ring focus:ring--200 focus:ring-opacity-50"
                />
              </div>

              <div>
                <label
                  htmlFor="movil"
                  className="block text-sm font-medium text-gray-700"
                >
                  Móvil
                </label>
                <input
                  id="movil"
                  name="movil"
                  type="text"
                  value={formData.movil}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border--500 focus:ring focus:ring--200 focus:ring-opacity-50"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo Electrónico *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border--500 focus:ring focus:ring--200 focus:ring-opacity-50"
              />
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
              DECLARACIONES JURADAS
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed">
El firmante manifiesta, en carácter de declaración jurada, que constituye domicilio en aquel expuesto en el presente formulario. Asimismo,
declara que conoce y acepta que, cualquier modificación en el domicilio declarado, deberá informarse a la Secretaría de Administración dentro
de las 24 horas.
El firmante declara como medio de notificación digital fehaciente al correo electrónico provisto en el presente formulario; por lo que todas
las comunicaciones que se efectúen en cuestiones atinentes a la relación laboral se realizarán al correo declarado. Asimismo, declara que
conoce y acepta que, cualquier modificación en el domicilio declarado, deberá informarse a la Secretaría de Administración dentro de las 24
horas.
            </p>

            <p className="text-gray-600 text-sm font-semibold">
DECLARO QUE TODOS LOS DATOS CONSIGNADOS SON CORRECTOS Y SIN OMISIONES, Y ME COMPROMENTO A INFORMAR
OPORTUNAMENTE TODAS LAS CUESTIONES QUE REPRESENTEN CAMBIOS CON RESPECTO AL INICIO DE LA RELACIÓN LABORAL, TANTO EN
RESPECTO DE LA INFORMACIÓN PROVISTA EN EL PRESENTE FORMULARIO COMO LO CORRESPONDIENTE A:
            </p>

            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Declaración jurada de incompatibilidades, inhabilidades y conflictos de intereses de acuerdo a lo definido en la siguiente normativa:
ARTÍCULO 1° DECRETO N°85/02 – ARTÍCULOS 13 a 16 LEY N°25.188; ARTÍCULO 1° DECRETO N°894/01; Y ARTÍCULO 5° LEY N°25.164.</li>
              <li>Declaración Jurada de cargos y actividades</li>
              <li>Declaración jurada de personas integrantes del grupo familiar.</li>
              <li>Diplomas de Estudios.</li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label
                  htmlFor="lugarFecha"
                  className="block text-sm font-medium text-gray-700"
                >
                  Lugar y Fecha *
                </label>
                <input
                  id="lugarFecha"
                  name="lugarFecha"
                  type="text"
                  required
                  value={formData.lugarFecha}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border--500 focus:ring focus:ring--200 focus:ring-opacity-50"
                />
              </div>

              <div>
                <label
                  htmlFor="firma"
                  className="block text-sm font-medium text-gray-700"
                >
                  Firma *
                </label>
                <input
                  id="firma"
                  name="firma"
                  type="text"
                  required
                  value={formData.firma}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border--500 focus:ring focus:ring--200 focus:ring-opacity-50"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="aclaracion"
                className="block text-sm font-medium text-gray-700"
              >
                Aclaración
              </label>
              <input
                id="aclaracion"
                name="aclaracion"
                type="text"
                value={formData.aclaracion}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border--500 focus:ring focus:ring--200 focus:ring-opacity-50"
              />
            </div>
          </section>
        </form>

        <div className="p-6 border-t border-gray-200 text-right">
          {typeof window !== "undefined" && (
            <PDFDownloadLink
              document={<MyDocument data={formData} />}
              fileName="datos_personales.pdf"
              className="px-4 py-2 bg--600 text-white rounded hover:bg--700 transition bg-blue-400"
            >
              {({ loading }) => (loading ? "Generando PDF..." : "Descargar PDF")}
            </PDFDownloadLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalDataForm;