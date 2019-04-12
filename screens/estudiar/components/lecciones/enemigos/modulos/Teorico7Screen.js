import { ScrollView, View, Text } from 'react-native';
import React, { Component } from 'react';
import FitImage from 'react-native-fit-image';
import styles from "./css/estilo";

export default class Teorico7Screen extends Component {
  static navigationOptions = {
    title: 'Conociendo nuestra capacidad',
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
          <Text accessible={false} style={styles.subTittleColor}>Conociendo nuestra capacidad</Text>
          <Text accessible={false} style={styles.subTittle}>Entonces¿Cuánto sabes?</Text>
          <Text accessible={false} style={styles.texto}>En la actualidad se valora muchísimo CUÁNTO SABEMOS; sin embargo, esto ha dado paso a que muchos olvidemos CUÁNTO SOMOS CAPACES DE APRENDER.{"\n"}{"\n"}
            Vayamos a un caso fácil de identificar. El personal de contratación de una empresa, cuando pasa por la etapa de selección, tienden a pensar: “Cuanto más experiencia tenga, mejor es el candidato al puesto”; sin embargo, no siempre se cumple que, quien sabe más, consigue los mejores resultados.{"\n"}{"\n"}
            Podemos observar algo similar en nuestro círculo de amigos. No necesariamente aquellas personas que nos conocieron en la niñez, son hoy nuestros más grandes amigos; sino aquellos que se abrieron a conocernos mejor y dejar que los conozcamos.{"\n"}{"\n"}
            Asimismo, si hablamos de la familia, un buen hijo no es sólo aquel que sabe y aplica lo que les hemos enseñado; es también aquel que ante la experiencia que va adquiriendo a medida que se abre a la sociedad, aprende y enseña cómo la sociedad cambió para las personas de su edad; ayudándote a ser un padre más informado y a desarrollar una empatía mayor.</Text>
          <FitImage source={{ uri: 'https://www.axonplataforma.com.ar/images/enemigosdelaprendizaje-04.png' }} style={styles.fitImage} />
        </View>
      </ScrollView>
    );
  }
}