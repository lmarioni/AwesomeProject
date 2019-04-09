import RF from "react-native-responsive-fontsize";
import {ScrollView, StyleSheet, FlatList, View, Image, ImageBackground, Text, Dimensions} from 'react-native';
import React from 'react';
  
  export default function Teorico6Screen() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text accessible={false} style={styles.subTittleColor}>Práctica</Text>
          <Text accessible={false} style={styles.texto}>Cuando tengas la oportunidad de realizar Coaching a alguien, necesitarás distinguir cuál enemigo del aprendizaje tiene incorporado tu cliente. Por ello, a modo de práctica te proponemos elegir 3 Enemigos del Aprendizaje que reconozcas en ti mismo, escribirlos en tu cuaderno de apuntes y hallar cómo se manifiestan dentro de tus dominios: en lo familiar, laboral, social, etc.{"\n"}{"\n"}
          Ahora que ya eres consciente de aquello que te impide ampliar tu conocimiento, ingresa a la siguiente sección y encuentra material de lectura complementaria que te ayudará a saber más sobre este tema.{"\n"}{"\n"}
          Recuerda que, mientras tu curiosidad y voluntad sean mayores, las barreras al universo que te rodea caerán por si solas.{"\n"}</Text>
        </View>
      </ScrollView>
    )
  }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "stretch",
    backgroundColor: 'transparent',
    width: null,
    height: null,
  },
  contentContainer: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingLeft: 2,
    paddingRight: 2
  },
  title: {
    fontSize: RF(4.3),
    textAlign: 'center',
    marginBottom: 20,
    backgroundColor: 'transparent'
  },
  subTittle: {
    fontSize: RF(4),
    textAlign: 'center',
    fontWeight: "bold",
    backgroundColor: '#fff'
  },
  subTittleColor: {
    paddingTop: 10,
    fontSize: RF(4),
    textAlign: 'center',
    color: "#005D82",
    fontWeight: "bold",
    backgroundColor: 'transparent'
  },
  estiloBR: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'transparent'
  },
  texto: {
    fontSize: RF(2.8),
    textAlign: 'justify',
    fontWeight: '100',
    backgroundColor: '#fff',
    width: "100%",
    marginTop: 10,
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 10,
    borderRadius: 0,
    padding: 10,
    borderWidth: 1,
    borderColor: '#d8d8d8',
  }
});