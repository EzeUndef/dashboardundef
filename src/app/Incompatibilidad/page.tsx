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

Font.register({
  family: "Helvetica-Bold",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf",
});

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
  },
  container: {
    width: "100%",
    backgroundColor: "#fff",
  },
  header: {
    padding: 24,
    textAlign: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 10,
    textAlign: "center",
    textDecoration: "underline",
  },
  subtitle: {
    fontSize: 12,
    color: "#000000",
    textAlign: "center",
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 15,
    textDecoration: "underline",
  },
  declarationText: {
    fontSize: 12,
    color: "#000000",
    lineHeight: 1.5,
    marginBottom: 15,
    textAlign: "justify",
  },
  articleTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 10,
    textDecoration: "underline",
  },
  articleContent: {
    fontSize: 12,
    color: "#000000",
    lineHeight: 1.5,
    marginBottom: 15,
    textAlign: "justify",
  },
  listItem: {
    fontSize: 12,
    color: "#000000",
    marginBottom: 5,
    marginLeft: 15,
  },
  signatureSection: {
    marginTop: 30,
    marginBottom: 20,
  },
  signatureLine: {
    fontSize: 12,
    color: "#000000",
    marginTop: 40,
    borderTop: "1px solid #000000",
    paddingTop: 5,
    width: "60%",
  },
  boldText: {
    fontWeight: "bold",
  },
});

interface FormData {
  nombre: string;
  lugarFecha: string;
  firma: string;
  aclaracion: string;
}

const MyDocument = ({ data }: { data: FormData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>DECLARACIONES JURADAS</Text>
        </View>

        <Text style={styles.sectionTitle}>ARTÍCULO 1° DECRETO N° 85/02 - ARTÍCULOS 13 a 16 LEY N°25.188:</Text>
        
        <Text style={styles.declarationText}>
          Declaro bajo juramento que no me encuentro comprendido/a en las normas sobre incompatibilidades, inhabilidades y conflictos de intereses para el ejercicio del cargo previstas en los artículos 13 a 16 de la Ley N° 25.188 y sus modificaciones:
        </Text>

        <Text style={styles.articleTitle}>ARTICULO 13. --- Es incompatible con el ejercicio de la función pública:</Text>
        <Text style={styles.articleContent}>
          a) dirigir, administrar, representar, patrocinar, asesorar, o, de cualquier otra forma, prestar servicios a quien gestione o tenga una concesión o sea proveedor del Estado, o realice actividades reguladas por éste, siempre que el cargo público desempeñado tenga competencia funcional directa, respecto de la contratación, obtención, gestión o control de tales concesiones, beneficios o actividades;
        </Text>
        <Text style={styles.articleContent}>
          b) ser proveedor por sí o por terceros de todo organismo del Estado en donde desempeñe sus funciones.
        </Text>

        <Text style={styles.articleTitle}>ARTICULO 14. ---</Text>
        <Text style={styles.articleContent}>
          Aquellos funcionarios que hayan tenido intervención decisoria en la planificación, desarrollo y concreción de privatizaciones o concesiones de empresas o servicios públicos, tendrán vedada su actuación en los entes o comisiones reguladoras de esas empresas o servicios, durante TRES (3) años inmediatamente posteriores a la última adjudicación en la que hayan participado.
        </Text>
        <Text style={styles.articleContent}>(Artículo sustituido por art. 1° del Decreto N° 862/2001 B.O. 2/7/2001).</Text>

        <Text style={styles.articleTitle}>ARTICULO 15. ---</Text>
        <Text style={styles.articleContent}>
          En el caso de que al momento de su designación el funcionario se encuentre alcanzado por alguna de las incompatibilidades previstas en el Artículo 13, deberá:
        </Text>
        <Text style={styles.listItem}>a) Renunciar a tales actividades como condición previa para asumir el cargo.</Text>
        <Text style={styles.listItem}>
          b) Abstenerse de tomar intervención, durante su gestión, en cuestiones particularmente relacionadas con las personas o asuntos a los cuales estuvo vinculado en los últimos TRES (3) años o tenga participación societaria.
        </Text>
        <Text style={styles.articleContent}>(Artículo sustituido por art. 2° del Decreto N° 862/2001 B.O. 2/7/2001).</Text>

        <Text style={styles.articleTitle}>ARTICULO 16. ---</Text>
        <Text style={styles.articleContent}>
          Estas incompatibilidades se aplicarán sin perjuicio de las que estén determinadas en el régimen específico de cada función
        </Text>

        <View style={styles.signatureSection}>
          <Text style={styles.signatureLine}>LUGAR Y FECHA: {data.lugarFecha || "................................."}</Text>
          <Text style={styles.signatureLine}>FIRMA DEL AGENTE: {data.firma || "................................."}</Text>
          <Text style={styles.signatureLine}>ACLARACIÓN DE FIRMA: {data.aclaracion || "................................."}</Text>
        </View>

        <Text style={styles.sectionTitle}>ARTÍCULO 1° DECRETO N° 894/01:</Text>
        
        <Text style={styles.declarationText}>
          Declaro bajo juramento no encontrarme comprendido en ninguna de las situaciones previstas en el Artículo 1° del Decreto N° 894/01:
        </Text>

        <Text style={styles.articleContent}>
          "El desempeño de una función o cargo remunerado o prestación contractual con o sin relación de dependencia, bajo cualquier modalidad en la Administración Pública Nacional, es incompatible con la percepción de un beneficio previsional o haber de retiro proveniente de cualquier régimen de previsión nacional, provincial o municipal. La referida incompatibilidad se aplicará con independencia de las excepciones específicas que se hayan dispuesto o se dispusieren respecto del presente decreto, sus modificatorios y complementarios".
        </Text>

        <View style={styles.signatureSection}>
          <Text style={styles.signatureLine}>LUGAR Y FECHA: {data.lugarFecha || "................................."}</Text>
          <Text style={styles.signatureLine}>FIRMA DEL AGENTE: {data.firma || "................................."}</Text>
          <Text style={styles.signatureLine}>ACLARACIÓN DE FIRMA: {data.aclaracion || "................................."}</Text>
        </View>

        <Text style={styles.sectionTitle}>ARTÍCULO 5° LEY N° 25.164:</Text>
        
        <Text style={styles.declarationText}>
          Declaro bajo juramento no estar incurso en los impedimentos establecidos en el artículo 5° del Capítulo II de la Ley N° 25.164: "Sin perjuicio de lo establecido en el artículo anterior no podrán ingresar:
        </Text>

        <Text style={styles.listItem}>a) El que haya sido condenado por delito doloso, hasta el cumplimiento de la pena privativa de la libertad, o el término previsto para la prescripción de la pena.</Text>
        <Text style={styles.listItem}>b) El condenado por delito en perjuicio de la Administración Pública Nacional, Provincial o Municipal.</Text>
        <Text style={styles.listItem}>c) El que tenga proceso penal pendiente que pueda dar lugar a condena por los delitos enunciados en los incisos a) y b) del presente artículo.</Text>
        <Text style={styles.listItem}>d) El inhabilitado para el ejercicio de cargos públicos.</Text>
        <Text style={styles.listItem}>e) El sancionado con exoneración o cesantía en la Administración Pública Nacional, Provincial o Municipal, mientras no sea rehabilitado conforme lo previsto en los artículos 32 y 33 de la presente ley.</Text>
        <Text style={styles.listItem}>f) El que tenga la edad prevista en la ley previsional para acceder al beneficio de la jubilación o el que gozare de un beneficio previsional, salvo aquellas personas de reconocida aptitud, las que no podrán ser incorporadas al régimen de estabilidad.</Text>
        <Text style={styles.listItem}>g) El que se encuentre en infracción a las leyes electorales y del servicio militar, en el supuesto del artículo 19 de la Ley 24.429.</Text>
        <Text style={styles.listItem}>h) El deudor moroso del Fisco Nacional mientras se encuentre en esa situación.</Text>
        <Text style={styles.listItem}>i) Los que hayan incurrido en actos de fuerza contra el orden institucional y el sistema democrático, conforme lo previsto en el artículo 36 de la Constitución Nacional y el Título X del Código Penal, aun cuando se hubieren beneficiado por el indulto o la condonación de la pena".</Text>

        <View style={styles.signatureSection}>
          <Text style={styles.signatureLine}>LUGAR Y FECHA: {data.lugarFecha || "................................."}</Text>
          <Text style={styles.signatureLine}>FIRMA DEL AGENTE: {data.firma || "................................."}</Text>
          <Text style={styles.signatureLine}>ACLARACIÓN DE FIRMA: {data.aclaracion || "................................."}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

const DeclaracionesJuradasForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
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
        <div className="p-6 text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="bg-white p-2 rounded-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/75/UNDEF_-_UNIVERSITY_OF_THE_NATIONAL_DEFENSE_%28ARG%29.png"
                alt="Universidad de la Defensa Nacional"
                className="h-40 w-auto"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-black">
                DECLARACIONES JURADAS
              </h1>
            </div>
          </div>
        </div>

        <form className="p-6 md:p-8 space-y-6">
          <section className="space-y-4">
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre y Apellido *
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                value={formData.nombre}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>

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
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-200 focus:ring-opacity-50"
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
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>

            <div>
              <label
                htmlFor="aclaracion"
                className="block text-sm font-medium text-gray-700"
              >
                Aclaración de Firma
              </label>
              <input
                id="aclaracion"
                name="aclaracion"
                type="text"
                value={formData.aclaracion}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
          </section>

          <div className="p-6 border-t border-gray-200 text-right">
            {typeof window !== "undefined" && (
              <PDFDownloadLink
                document={<MyDocument data={formData} />}
                fileName="declaraciones_juradas.pdf"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                {({ loading }) => (loading ? "Generando PDF..." : "Descargar PDF")}
              </PDFDownloadLink>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeclaracionesJuradasForm;