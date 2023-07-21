import React from 'react';
import { Text, View, StyleSheet} from '@react-pdf/renderer'; 

const styles = StyleSheet.create({
  body: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    height: '70vh',
    width: '100%',
  },bodyProductos:{
    height: '65vh',
    borderTop:1,
    borderBottom:1,
    borderColor:"black",
    borderStyle:"solid",
  },bodyTotal:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: '5vh',
  },text:{
    fontSize: 12,
  },textResaltado:{
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5
  },casilla:{
    height: '2vh',
    flexDirection: "row",
    width: '100%',
  }
});

export const DataProductos = (props) => (
  <View style={styles.body}>
        <View style={styles.bodyProductos}>
            <View style={{maxHeight: '66vh', marginTop: "2vh" , marginBottom: "2vh" , marginRight: "10px" , marginLeft: "10px"}}>
                <View style={{...styles.casilla ,  backgroundColor: 'rgba(55,55,55,1)'}}>
                    <View style={{width:"8%"}}>
                        <Text style={{fontSize: 12 , color: "white" , width: "100%" , marginLeft: 5}}>
                            N°
                        </Text>
                    </View>
                    <View style={{width:"47%"}}>
                        <Text style={{fontSize: 12 , color: "white" , width: "100%"}}>
                            Nombre
                        </Text>
                    </View>
                    <View style={{width:"15%" , alignItems:"flex-end"}}>
                        <Text style={{fontSize: 12 , color: "white" , textAlign:"right" , width: "100%"}}>
                            Cantidad
                        </Text>
                    </View>
                    <View style={{width:"15%" , alignItems:"flex-end"}}>
                        <Text style={{fontSize: 12 , color: "white" , textAlign:"right" , width: "100%"}}>
                            Precio
                        </Text>
                    </View>
                    <View style={{width:"15%" , alignItems:"flex-end"}}>
                        <Text style={{fontSize: 12 , color: "white" , textAlign:"right" , width: "100%" , marginRight: 5}}>
                            Sub Total
                        </Text>
                    </View>
                </View>
                {props.data.map((n , i) => 
                    <View style={styles.casilla}>
                        <View style={{width:"8%"}}>
                            <Text style={{fontSize: 12 , width: "100%" , marginLeft: 5}}>
                                {i + 1 + props.hoja * 33}
                            </Text>
                        </View>
                        <View style={{width:"47%"}}>
                            <Text style={{fontSize: 12 , width: "100%"}}>
                                {n.nombre}
                            </Text>
                        </View>
                        <View style={{width:"15%" , alignItems:"flex-end"}}>
                            <Text style={{fontSize: 12 , textAlign:"right" , width: "100%"}}>
                                {n.cantidad}
                            </Text>
                        </View>
                        <View style={{width:"15%" , alignItems:"flex-end"}}>
                            <Text style={{fontSize: 12 , textAlign:"right" , width: "100%"}}>
                                {n.precio}
                            </Text>
                        </View>
                        <View style={{width:"15%" , alignItems:"flex-end"}}>
                            <Text style={{fontSize: 12 , textAlign:"right" , width: "100%" , marginRight: 5}}>
                                {n.precio * n.cantidad}
                            </Text>
                        </View>
                    </View>
                )}
            </View>
        </View>
        <View style={styles.bodyTotal}>
            <Text style={{textAlign: "right" , marginRight: 10}}>Total: ${props.total}</Text>
        </View>
  </View>
);