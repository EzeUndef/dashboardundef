// components/PdfDownloader.tsx
"use client";

import React from "react";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Formulario de Datos Personales</Text>
        {/* Agrega aquí los campos */}
      </View>
    </Page>
  </Document>
);

const PdfDownloader = () => (
  <PDFDownloadLink
    document={<MyDocument />}
    fileName="formulario_datos_personales.pdf"
    className="px-6 py-2 bg-blue-600 text-white rounded-md"
  >
    {({ loading }: { loading: boolean }) => (loading ? "Generando..." : "Descargar PDF")}
  </PDFDownloadLink>
);

export default PdfDownloader;
