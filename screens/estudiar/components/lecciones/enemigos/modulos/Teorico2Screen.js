
import { ScrollView, View, Text, ImageBackground } from 'react-native';
import React, { Component } from 'react';
import styles from "./css/estilo";
const fondo = 'https://www.axonplataforma.com.ar/aca/f/cursoc/fondo.png';
const imagen_inicio = "https://www.axonplataforma.com.ar/images/5c1d4494037c3.png";
const resizeMode = 'center';
export default class Teorico2Screen extends Component {
  static navigationOptions = {
    title: 'Qué es el Aprendizaje',
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
        <ImageBackground style={{ flex: 1, resizeMode }} source={{ uri: fondo }}>
          <View style={styles.container}>
            <Text accessible={false} style={styles.subTittleColor}>¿Qué es Aprendizaje?</Text>
            <Text accessible={false} style={styles.texto}>
              Para empezar, te contaremos un poco sobre el Aprendizaje en términos del Coaching Ontológico. Cuando hablamos de Aprendizaje, nos referimos a adquirir conocimientos no sólo de lo exterior, también de nuestro interior; emprendiendo un viaje que nos permitirá saber más sobre nuestra historia personal, cultural, aquello que hemos heredado y así, enriquecer nuestra relación con nosotros mismos.{"\n"}{"\n"}
              Cuando aprendemos sobre nosotros y sobre el universo, nos transformamos. Nos convertimos en seres conscientes sobre nuestros estados de ánimo, relatos históricos, obstáculos, cuerpo, y mucho más.{"\n"}{"\n"}
              Normalmente el Aprendizaje Tradicional se concentra en el "saber" y en aquello que se puede "probar":{"\n"}{"\n"}
              - ¿Se puede tocar?{"\n"}
              - ¿Se puede medir de alguna forma?{"\n"}
              - ¿Hay un fundamento teórico que lo sostenga?{"\n"}
              - ¿Está dentro de lo que se vé?{"\n"}{"\n"}
              A partir de esto, podríamos decir que eso sí es Saber; sin embargo, este tipo de aprendizaje no tiene en cuenta aspectos del Ser, tales como: las emociones, el espíritu y nuestro mundo interior.{"\n"}{"\n"}
              Con el pasar del tiempo, el Mundo Interior se ha ido convirtiendo en una imaginación. No se toca, no se mide, no se conoce cómo funciona ni se entiende; pues como sabemos, las emociones no pueden medirse en el sistema métrico decimal.{"\n"}{"\n"}
              - La sensación de ternura de una madre cuando abraza a su hijo no puede cuantificarse.{"\n"}
              - Las lágrimas de alegría al volver a vernos no caben en una pipeta graduada.{"\n"}
              - Una mirada profunda, el contacto visual de ojos con ojos no puede medirse en centímetros de distancia.{"\n"}{"\n"}
              <Text style={{ fontWeight: 'bold' }}>El Mundo Interior y el aprendizaje actual están en problemas.</Text>{"\n"}
              <Text style={{ fontWeight: 'bold' }}>El Mundo Interno está inmerso en una soledad infinita.</Text>{"\n"}{"\n"}
              Por alguna de estas razones estás tomando esta carrera. El Coaching Ontológico nace como necesidad de conectar nuevamente esos dos mundos.
              </Text>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}