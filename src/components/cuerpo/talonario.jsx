import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { DataProductos } from "../productos/talonario";

const styles = StyleSheet.create({
  cuerpo: {
    padding: 15,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    backgroundColor: "white",
  },
  encabezadoSup: {
    padding: "10px 0px 15px 0px",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  titleBold: {
    fontSize: 12,
    fontWeight: 800,
    width: "100%",
    textAlign: "right",
  },
  semiTitle: {
    fontSize: 12,
    width: "100%",
    textAlign: "right",
  },
  encabezadoInf: {
    padding: "10px 0px 10px 0px",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textBold: {
    fontSize: 8,
    fontWeight: 800,
    width: "100%",
  },
  text: {
    fontSize: 8,
    width: "100%",
  },
  textCentrado: {
    fontSize: 8,
    textAlign: "center",
    width: "100%",
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },
});

export const Cuerpo = (props) => {
  const data = props.data;

  return (
    <View style={styles.cuerpo}>
      <View>
        <View style={styles.encabezadoSup}>
          <View style={{width: "50%" , flexDirection: "column"}}>
            <Image
              src={"/public/images/titulo.png"}
              style={{height: 25 , width: 45}}
              fixed={true}
            />
          </View>
          <View style={{width: "50%" , flexDirection: "column"}}>
            <Text style={styles.titleBold}>FACTURA</Text>
            <Text style={styles.semiTitle}>N°{data?.numero_de_factura}</Text>
            <Text style={styles.semiTitle}>{data?.fecha}</Text>
          </View>
        </View>
        <View style={styles.encabezadoInf}>
          <View
            style={{
              padding: 2,
              backgroundColor: "rgb(200 200 200)",
              width: "100%",
            }}>
            <Text style={styles.textBold}>INFORMACIÓN DE CONTACTO</Text>
          </View>
          <View
            style={{
              padding: 2,
              width: "100%",
              borderBottom: "1px solid black",
            }}>
            <Text style={styles.text}>
              Nombre y Apellido: {data?.nombre_emisor}
            </Text>
          </View>
          <View
            style={{
              padding: 2,
              width: "100%",
              borderBottom: "1px solid black",
              flexDirection: "row",
              alignItems: "space-between",
            }}>
            <Text style={styles.text}>
              Dirección: {data?.localiad} {data?.direccion}
            </Text>
            <Text style={styles.text}>Teléfono: {data?.telefono}</Text>
          </View>
        </View>
      </View>
      <DataProductos productos={props.productos} />
      <View style={styles.footer}>
        <Text style={styles.textCentrado}>
          {data?.localidad} {data?.direccion}
        </Text>
        <Text style={styles.textCentrado}>{data?.correo_electronico}</Text>
        <Text style={styles.textCentrado}>{data?.sitio_web}</Text>
      </View>
    </View>
  );
};
