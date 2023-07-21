import React, { useEffect, useState } from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { DataPropietario } from "../components/cabecera/tipoC_Propietario.jsx";
import { DataCliente } from "../components/cabecera/tipoC_Cliente.jsx";
import { DataProductos } from "../components/productos/tipoC.jsx";
import { crearObjetosDesdeString }  from "../funciones/productosEscritos.js"

const styles = StyleSheet.create({
  margen: {
    margin: 15,
    flexDirection: "column",
  },
});

const TipoC = (props) => {
  const data = props.data;
  const localProductos = crearObjetosDesdeString(data.productos)
  const dataEmisor = {
    nombre_emisor: data.nombre_emisor,
    direccion: data.direccion,
    telefono: data.telefono,
    correo_electronico: data.correo_electronico,
    numero_de_factura: data.numero_de_factura,
    fecha: data.fecha,
    tipo_factura: data.tipo_factura,
  };

  const dataReseptos = {
    nombre_receptor: data.nombre_receptor,
    numero_de_cliente: data.numero_de_cliente,
    localidad: data.localidad,
    medio_de_pago: data.medio_de_pago,
    tipo_venta: data.tipo_venta,
  };

  const [productos, setProductos] = useState([[]]);
  
  useEffect(() => {
    divicionDeData();
  }, []);
  
  const PrecioTotal = () => {
    let total = 0;
    localProductos.map((n) => (total += n.precio * n.cantidad));
    return total;
  }
  

  const divicionDeData = () => {
    let data = [...localProductos]
    let retorno = [[]];
    
    let contador = 0;
    let index = 0;
    
    while (0 < data.length) {
      let aux = data.shift();
      
      retorno[index].push(aux);
      
      if (contador === 32) {
        index++;
        contador = 0;
        retorno.push([]);
      } else {
        contador++;
      }
    }
    
    setProductos(retorno);
  };

  const precioTotal = PrecioTotal()

  return (
    <Document>
      {productos[0].length > 0 &&
        productos.map((n, i) => (
          <Page
          size="A4"
            style={styles.page}
            key={i}>
            <View style={styles.margen}>
              <DataPropietario
                data={dataEmisor}
                numeroHoja={i + 1}
              />
              <DataCliente data={dataReseptos} />
              <DataProductos
                data={n}
                total={precioTotal}
                hoja={i}
              />
            </View>
          </Page>
        ))}
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
          type="date"
          className="border border-black p-1"
          name="fecha"
          id="fecha"
          placeholder="fecha"
        />
        <select
          id="tipo_factura"
          name="tipo_factura">
          <option value=""></option>
          <option value="original">original</option>
          <option value="duplicado">duplicado</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-2 px-3 py-5 w-full">
        <h2 className="border-b border-black w-full">Emisor</h2>
        <input
          type="text"
          className="border border-black p-1"
          name="nombre_receptor"
          id="nombre_receptor"
          placeholder="nombre_receptor"
        />
        <input
          type="text"
          className="border border-black p-1"
          name="numero_de_cliente"
          id="numero_de_cliente"
          placeholder="numero_de_cliente"
        />
        <input
          type="text"
          className="border border-black p-1"
          name="localidad"
          id="localidad"
          placeholder="localidad"
        />
        <select
          id="medio_de_pago"
          name="medio_de_pago">
          <option value=""></option>
          <option value="efectivos">efectivos</option>
          <option value="tarjeta de credito">tarjeta de credito</option>
          <option value="tarjeta de debito">tarjeta de debito</option>
          <option value="cheque">cheque</option>
          <option value="transferencia bancaria">transferencia bancaria</option>
        </select>
        <select
          id="tipo_venta"
          name="tipo_venta">
          <option value=""></option>
          <option value="consumidor final">consumidor final</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-2 px-3 py-5 w-full">
        <h2 className="border-b border-black w-full">Productos: Nombre, cantidad, precio</h2>
        <textarea
          className="w-full min-h-[200px] border border-black p-1"
          name="productos"
          id="productos"
          placeholder="productos"
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
    const tipo_factura = formData.get("tipo_factura");
    const medio_de_pago = formData.get("medio_de_pago");
    const nombre_receptor = formData.get("nombre_receptor");
    const numero_de_cliente = formData.get("numero_de_cliente");
    const localidad = formData.get("localidad");
    const tipo_venta = formData.get("tipo_venta");
    const productos = formData.get("productos");

    setData({
      nombre_emisor,
      direccion,
      telefono,
      correo_electronico,
      numero_de_factura,
      fecha,
      tipo_factura,
      medio_de_pago,
      nombre_receptor,
      numero_de_cliente,
      localidad,
      tipo_venta,
      productos
    });
  };

  return (
    <>
      <FomularioDeCarga handlerForm={handlerForm} />
      {data?.nombre_emisor && (
        <PDFViewer
          style={{ width: "100%", height: "93vh", margin: 0, padding: 0 }}>
          <TipoC data={data} />
        </PDFViewer>
      )}
    </>
  );
}
