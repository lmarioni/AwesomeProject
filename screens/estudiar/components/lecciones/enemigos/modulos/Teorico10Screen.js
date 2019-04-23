import { ScrollView, View, Text, Dimensions, Image } from 'react-native';
import React, { Component } from 'react';
import styles from "./css/estilo";
const imagen1 = "https://www.axonplataforma.com.ar/images/ejercicio01.png";
const imagen2 = "https://www.axonplataforma.com.ar/images/ejercicio02.png";
export default class Teorico10Screen extends Component {
  static navigationOptions = {
    title: 'Ejercicio',
    headerStyle: {
      backgroundColor: '#C2092A',
      borderBottomColor: 'white',
      borderBottomWidth: 3,
    },
    headerTitleStyle: {
      color: 'white'
    },
    backButton: {
      color: "white"
    },
    headerTintColor: "white"
  };
  render() {
    let dimensions = Dimensions.get("window");
    let imageHeight = Math.round((dimensions.width * 9) / 16);
    let imageWidth = dimensions.width;
    let mode = 'center';
    return (
      <ScrollView contentContainerStyle={styles.otherContentContainer}>
        <View style={styles.container}>
          <Text accessible={false} style={styles.subTittleColor}>Ejercicio</Text>
          <Image style={{ height: imageHeight, width: imageWidth }} source={{ uri: imagen1 }} resizeMode={mode} />
          <Text accessible={false} style={styles.texto}>Cuando tengas la oportunidad de realizar Coaching a alguien, <Text style={{ fontStyle: 'italic', textDecorationLine: "underline" }}>necesitarás distinguir cuál enemigo del aprendizaje tiene incorporado tu cliente</Text>. Por ello, <Text style={{ fontWeight: 'bold' }}>a modo de práctica te proponemos elegir 3 Enemigos del Aprendizaje que reconozcas en ti mismo</Text>, escribirlos en tu cuaderno de apuntes y hallar cómo se manifiestan dentro de tus dominios: en lo familiar, laboral, social, etc.</Text>
          <Image style={{ height: imageHeight, width: imageWidth }} source={{ uri: imagen2 }} resizeMode={mode} />
          <Text accessible={false} style={styles.texto}>Ahora que ya eres consciente de aquello que te impide ampliar tu conocimiento, ingresa a la siguiente sección y encuentra material de lectura complementaria que te ayudará a saber más sobre este tema.{"\n"}{"\n"}
            Recuerda que, <Text style={{ fontWeight: 'bold' }}>mientras tu curiosidad y voluntad sean mayores</Text>, las barreras al universo que te rodea caerán por si solas.{"\n"}</Text>
        </View>
      </ScrollView>
    );
  }
}