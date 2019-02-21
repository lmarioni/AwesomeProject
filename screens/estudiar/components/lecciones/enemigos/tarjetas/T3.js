import React, { Component } from 'react';
import RF from "react-native-responsive-fontsize";
import {
    ScrollView,
    StyleSheet,
    FlatList,
    View,
    Image,
    Text,
  } from 'react-native';


class T3 extends Component {
  render() {
    return (
        <View >
        <Text style={styles.texto}> 
        Cuando aprendemos sobre nosotros y sobre el universo, nos transformamos. Nos convertimos en seres conscientes sobre nuestros estados de ánimo, relatos históricos, obstáculos, cuerpo, y mucho más.
        </Text>   
        <View style={{marginBottom:10}} />
        <Text style={styles.texto}> 
        
        </Text>
</View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignSelf: "stretch",
  },
  title: {
    fontSize: RF(5),
    textAlign: 'center',
    marginBottom: 20,
  },
  subTittle: {
    fontSize: RF(3.7),
    textAlign: 'center',
  },
  texto: {
    marginTop:10,
    fontSize: RF(3),
    textAlign: 'center',
    fontWeight: '100',
  }
});

export default T3;