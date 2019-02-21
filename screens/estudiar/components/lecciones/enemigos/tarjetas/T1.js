import React, { Component } from 'react'
import RF from "react-native-responsive-fontsize";
import {
    ScrollView,
    StyleSheet,
    FlatList,
    View,
    Image,
    Text,
  } from 'react-native';


class T1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido...</Text>
        <Text style={styles.subTittle}>¡Estás por dar inicio a tu primera clase teórica!</Text>
        <View style={{marginBottom:10}} />
        <Text style={styles.texto}> Todas estas lecciones te ayudarán a disminuír la brecha que existe entre la realidad que vives hoy y la Realidad Ideal que quieres alcanzar. </Text>
        <View style={{marginBottom:20}} />
        <Text style={styles.texto}> Mientras estudies esta lección, fíjate qué necesitas aprender y cuáles son aquellos enemigos del aprendizaje que están impidéndote alcanzar tu Realidad Ideal. </Text>
        <View style={{marginBottom:20}} />
        
          <Text style={{fontSize: 25,textAlign: 'center'}}>
            Desliza para Continuar
            <Image
            style={{width: 66, height: 58}}
            source={{uri: 'data:image/png;base64,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'}}
          />
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

export default T1;