import React from 'react';
import fotoTitulo from "/images/titulo.png";
import { Text, View, StyleSheet , Image} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  cabecera: {
    borderBottom:1,
    borderColor:"black",
    borderStyle:"solid",
    paddingBottom:5,
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },imagen:{
    height: '50px',
    width: '90px',
  },blockStandar:{
    flexDirection: 'column',
    width: '33%',
  },blockStandarCentrado:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '33%',
  },text:{
    fontSize: 12,
  }
});

export const DataPropietario = (props) => (
  <View style={styles.cabecera}>

      <View style={styles.blockStandar}>

          <View style={styles.section}>
              <Image 
                src={"/public/images/titulo.png"} 
                style={styles.imagen}
                fixed={true}
              />
          </View>

          <Text style={{...styles.text , marginLeft: 5}}>de {props.data?.nombre_emisor}</Text>
          <Text style={{...styles.text , marginLeft: 5}}>{props.data?.direccion}</Text>
          <Text style={{...styles.text , marginLeft: 5}}>{props.data?.telefono}</Text>
          <Text style={{...styles.text , marginLeft: 5}}>{props.data?.correo_electronico}</Text>

      </View>
      <View style={styles.blockStandarCentrado}>

          {/* B o C */}
          <Text style={{fontSize: 50}}>
            C
          </Text>

      </View>
      <View style={styles.blockStandar}>

          <View style={{height: 50}} />
          <Text style={styles.text}>N° {props.data?.numero_de_factura}</Text>
          <Text style={styles.text}>Fecha: {props.data?.fecha}</Text>
          <Text style={styles.text}>{props.data?.tipo_factura}</Text>
          <Text style={styles.text}>Número de hoja: {props?.numeroHoja}</Text>

      </View>

  </View>
);