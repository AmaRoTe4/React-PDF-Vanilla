import React, { useEffect, useState } from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { Cuerpo } from "../components/cuerpo/talonario";
import { crearObjetosDesdeString } from "../funciones/productosEscritos";

const styles = StyleSheet.create({
  margen: {
    margin: 15,
    flexDirection: "column",
  },
});

const Talonario = (props) => {
    const data = props.data;
    const productos = crearObjetosDesdeString(data.productos);

  return (
    <Document>
      <Page
        size="A6"
        style={styles.page}>
        <View style={styles.margen}>
          <Cuerpo
            data={data}
            productos={productos}
          />
        </View>
      </Page>
    </Document>
  );
};

const FomularioDeCarga = (props) => {
  return (
    <form
      className="pt-5 pb-[300px] flex flex-col items-center"
      onSubmit={(e) => {
        props.handlerForm(e);
      }}>
      <div className="flex flex-wrap gap-2 px-3 py-5 w-full">
        <h2 className="border-b border-black w-full">Emisor</h2>
        <input
          type="text"
          className="border border-black p-1"
          name="nombre_emisor"
          id="nombre_emisor"
          placeholder="nombre_emisor"
        />
        <input
          type="text"
          className="border border-black p-1"
          name="direccion"
          id="direccion"
          placeholder="direccion"
        />
        <input
          type="text"
          className="border border-black p-1"
          name="localidad"
          id="localidad"
          placeholder="localidad"
        />
        <input
          type="text"
          className="border border-black p-1"
          name="telefono"
          id="telefono"
          placeholder="telefono"
        />
        <input
          type="text"
          className="border border-black p-1"
          name="correo_electronico"
          id="correo_electronico"
          placeholder="correo_electronico"
        />
        <input
          type="text"
          className="border border-black p-1"
          name="numero_de_factura"
          id="numero_de_factura"
          placeholder="numero_de_factura"
        />
        <input
          type="text"
          className="border border-black p-1"
          name="sitio_web"
          id="sitio_web"
          placeholder="sitio_web"
        />
        <input
          type="date"
          className="border border-black p-1"
          name="fecha"
          id="fecha"
          placeholder="fecha"
        />
        <label className="w-[90%]">Nombre, cantidad, precio</label>
        <textarea
          className="border border-black w-[90%] min-h-[300px] p-3"
          name="productos"
          id="productos"
          placeholder="escriba cada producto con su cantida y precio separado por un renglon y por cada unidad una linea"
        />
      </div>
      <button className="py-2 px-[200px] rounded-xl bg-green-600 text-center mx-3">
        Create
      </button>
    </form>
  );
};

export default function RenderCompleto() {
  const [data, setData] = useState({});

  const handlerForm = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const nombre_emisor = formData.get("nombre_emisor");
    const direccion = formData.get("direccion");
    const telefono = formData.get("telefono");
    const correo_electronico = formData.get("correo_electronico");
    const numero_de_factura = formData.get("numero_de_factura");
    const fecha = formData.get("fecha");
    const sitio_web = formData.get("sitio_web");
    const productos = formData.get("productos");
    const localidad = formData.get("localidad");

    setData({
      localidad,
      nombre_emisor,
      direccion,
      telefono,
      correo_electronico,
      numero_de_factura,
      fecha,
      sitio_web,
      productos,
    });
  };

  return (
    <>
      <FomularioDeCarga handlerForm={handlerForm} />
      {data?.productos?.length > 0 && (
        <PDFViewer
          style={{ width: "100%", height: "93vh", margin: 0, padding: 0 }}>
          <Talonario data={data} />
        </PDFViewer>
      )}
    </>
  );
}
