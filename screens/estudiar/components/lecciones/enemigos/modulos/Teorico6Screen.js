import { ScrollView, View, Text } from 'react-native';
import React, { Component } from 'react';
import FitImage from 'react-native-fit-image';
import styles from "./css/estilo";

export default class Teorico6Screen extends Component {
  static navigationOptions = {
    title: 'La propia imagen',
    headerStyle: {
      backgroundColor: '#0081C4',
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
    return (
      <ScrollView contentContainerStyle={styles.otherContentContainer}>
        <View style={styles.container}>
          <FitImage source={{ uri: 'https://www.axonplataforma.com.ar/images/enemigosdelaprendizaje-03.png' }} style={styles.fitImage} />
          <Text accessible={false} style={styles.subTittleColor}>¿Qué sucede con aquellos que pretenden saberlo todo?</Text>
          <Text accessible={false} style={styles.texto}>En el coaching, trabajamos aquello que es nuestra propia observación. Esto, nos llevará a descubrir cuáles son esos enemigos internos que podrían estar condicionando nuestro aprendizaje, haciendo que este sea menor de lo que pretendemos.{"\n"}{"\n"}
            Aquellos que dicen no necesitar aprender más, no necesariamente se trata de personas expertas; sino de gente dominada por un enemigo del aprendizaje, al que llamamos LA PROPIA IMAGEN.{"\n"}{"\n"}
            Para aquellas personas, su compromiso está enfocado en defender su PROPIA IMAGEN PÚBLICA. Por ello, sea la pregunta que le hagas, se limitará a respondértela desde su saber y este, lo defenderá con uñas y dientes.{"\n"}{"\n"}
            ¿Te imaginas a esa persona conversando sobre Política? ¿Maltrato familiar? ¿El próximo vuelo que planea la NASA?{"\n"}{"\n"}
            Para ellos, SABER DE TODO es su orgullo; pero no se trata de estar 100% informados, sino que defienden a muerte su punto de vista, determinándolo como LA VERDAD indiscutible.</Text>
        </View>
      </ScrollView>
    );
  }
}