import { ScrollView, StyleSheet, View, Text } from 'react-native';
import React, { Component } from 'react';
import FitImage from 'react-native-fit-image';
import styles from "./css/estilo";

export default class Teorico8Screen extends Component {
  static navigationOptions = {
    title: 'Principales enemigos del aprendizaje',
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
          <Text accessible={false} style={styles.subTittleColor}>Principales enemigos del aprendizaje</Text>
          <Text accessible={false} style={styles.texto}>Jurar saberlo todo, es sólo uno de los principales enemigos del aprendizaje; sin embargo, existen muchos más que, probablemente, reconozcas a continuación:{"\n"}{"\n"}
            1.- Juzgar a los demás constantemente{"\n"}
            2.- Ser adicto a las respuestas.{"\n"}
            3.- Desautorizar a los demás para que nos enseñen.{"\n"}
            4.- Forzar a tener todo claro.{"\n"}
            5.- Buscar excusas.{"\n"}
            6.- Hacer del tiempo, tu enemigo por defecto.{"\n"}
            7.- Aclarar a los demás que tú eres así y no puedes aprender o cambiar.{"\n"}
            8.- Interponer el factor edad antes de siquiera intentar algo.{"\n"}
            9.- Decir "no tengo energía"{"\n"}</Text>
          <FitImage source={{ uri: 'https://www.axonplataforma.com.ar/images/enemigosdelaprendizaje-05-05.png' }} style={styles.fitImage} />
          <Text accessible={false} style={styles.subTittleColor}>¿Cuál otro podrías agregar?</Text>
        </View>
      </ScrollView>
    );
  }
}