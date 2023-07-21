import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

export const DataProductos = (props) => {
  const productos = props.productos;
  let total = 0 
  
  productos.map((producto) => {
    total += producto.precio * producto.cantidad;
  })

  return (
    <View style={{ width: "100%", padding: "5px 0px" , minHeight: "50vh" }}>
      <View
        style={{
          border: "1px solid black",
          flexDirection: "column",
          width: "100%",
        }}>
        <View
          style={{
            backgroundColor: "rgb(200 200 200)",
            borderBottom: "solid 1px black",
            flexDirection: "row",
            padding: "0px 2px",
          }}>
          <View
            style={{
              width: "60%",
              padding: "3px 0px",
              borderRigth: "solid 1px black",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 8,
                fontWeight: 800,
              }}>
              DESCRIPCIÓN
            </Text>
          </View>
          <View
            style={{
              width: "20%",
              padding: "3px 0px",
              borderRigth: "solid 1px black",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Text style={{ textAlign: "center", fontSize: 8, fontWeight: 800 }}>
              CANTIDAD
            </Text>
          </View>
          <View
            style={{
              width: "20%",
              padding: "3px 0px",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 8,
                fontWeight: 800,
              }}>
              PRECIO
            </Text>
          </View>
        </View>
        {productos &&
          productos.map((producto, index) => (
            <View
              key={index}
              style={{
                borderBottom: "1px solid black",
                padding: "1px 4px",
                flexDirection: "row",
              }}>
              <View
                style={{
                  width: "60%",
                  padding: "1px 0px",
                  borderRigth: "solid 1px black",
                }}>
                <Text style={{ fontSize: 8, whiteSpace: "normal" }}>
                  {producto?.nombre}
                </Text>
              </View>
              <View
                style={{
                  width: "20%",
                  padding: "1px 0px",
                  borderRigth: "solid 1px black",
                }}>
                <Text style={{ textAlign: "center", fontSize: 8 }}>
                  {producto?.cantidad}
                </Text>
              </View>
              <View
                style={{
                  width: "20%",
                  padding: "1px 0px",
                }}>
                <Text style={{ textAlign: "center", fontSize: 8 }}>
                  {producto?.precio}
                </Text>
              </View>
            </View>
          ))}
          <View
          style={{
            backgroundColor: "rgb(200 200 200)",
            borderBottom: "solid 1px black",
            flexDirection: "row",
            padding: "0px 2px",
            alignItems: "right"
          }}>
          <View
            style={{
              width: "100%",
              padding: "3px 0px",
              justifyContent: "right",
              alignItems: "center",
            }}>
            <Text
              style={{
                width: "100%",
                textAlign: "right",
                fontSize: 10,
                fontWeight: 800,
              }}>
              TOTAL: ${total}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
