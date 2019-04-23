import { ScrollView, View, Text, Image, Dimensions } from 'react-native';
import React, { Component } from 'react';
import FitImage from 'react-native-fit-image';
import styles from "./css/estilo";
const imagen1 = "https://www.axonplataforma.com.ar/images/LaPropiaImagen01.png";
const imagen2 = "https://www.axonplataforma.com.ar/images/enemigosdelaprendizaje-03.png";
export default class Teorico6Screen extends Component {
  static navigationOptions = {
    title: 'La propia imagen',
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
          <Text accessible={false} style={styles.subTittleColor}>¿Qué sucede con aquellos que pretenden saberlo todo?</Text>
          <Image style={{ height: imageHeight, width: imageWidth }} source={{ uri: imagen1 }} resizeMode={mode} />
          <Text accessible={false} style={styles.texto}>En el coaching, trabajamos aquello que es <Text style={{ fontStyle: 'italic', textDecorationLine: "underline" }}>nuestra propia observación</Text>. Esto, nos llevará a descubrir cuáles son esos <Text style={{ fontWeight: 'bold' }}>enemigos internos que podrían estar condicionando nuestro aprendizaje</Text>, haciendo que este sea menor de lo que pretendemos.{"\n"}{"\n"}
            Aquellos que dicen no necesitar aprender más, no necesariamente se trata de personas expertas; sino de gente dominada por un enemigo del aprendizaje, al que llamamos <Text style={{ fontWeight: 'bold' }}>LA PROPIA IMAGEN</Text>.</Text>
            <Image style={{ height: imageHeight, width: imageWidth }} source={{ uri: imagen2 }} resizeMode={mode} />
          <Text accessible={false} style={styles.texto}>Para aquellas personas, su compromiso está enfocado en defender su <Text style={{ fontWeight: 'bold' }}>PROPIA IMAGEN PÚBLICA</Text>. Por ello, sea la pregunta que le hagas, se limitará a respondértela desde su saber y este, lo defenderá con uñas y dientes.{"\n"}{"\n"}
          <Text style={{ fontWeight: 'bold', color: "#C2092A" }}>¿Te imaginas a esa persona conversando sobre Política? ¿Maltrato familiar? ¿El próximo vuelo que planea la NASA?</Text>{"\n"}{"\n"}
            Para ellos, <Text style={{ fontWeight: 'bold' }}>SABER DE TODO</Text> es su orgullo; pero no se trata de estar 100% informados, sino que defienden a muerte su punto de vista, determinándolo como <Text style={{ fontWeight: 'bold' }}>LA VERDAD</Text> indiscutible.</Text>
        </View>
      </ScrollView>
    );
  }
}