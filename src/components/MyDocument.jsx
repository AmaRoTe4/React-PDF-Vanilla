import React, { useEffect , useState } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { DataPropietario } from './cabecera/Propietario.jsx';
import { DataCliente } from './cabecera/Cliente.jsx';
import { DataProductos } from './productos/index.jsx';
import Data from "../data/data.json"

const styles = StyleSheet.create({
  margen: {
    margin: 15,
    flexDirection: 'column',
  }
});

export const MyDocument = () => {
  const [productos , setProductos] = useState([[]]);

  useEffect(() => {
    divicionDeData()
  },[])

  const divicionDeData = () => {
    let data = Data[0].Productos.productos.map(n => n);
    let retorno = [[]]

    let contador = 0
    let index = 0
    
    while(0 < data.length) {
      let aux = data.shift()
      
      retorno[index].push(aux)
      
      if(contador === 32){
        index++;
        contador = 0;
        retorno.push([])
      }else{
        contador++
      }
    }

    setProductos(retorno)
  }

  return (
    <Document>
      {productos[0].length > 0 && productos.map((n , i) => 
          <Page size="A4" style={styles.page} key={i}>
            <View style={styles.margen}>
              <DataPropietario data={Data[0].Propietario} numeroHoja={i + 1} />
              <DataCliente data={Data[0].Cliente} />
              <DataProductos 
                data={n} 
                total={Data[0].Productos.total}
                hoja={i}
              />
            </View>
          </Page>
      )}
  </Document>
  );
};