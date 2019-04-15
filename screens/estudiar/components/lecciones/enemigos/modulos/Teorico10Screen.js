import { ScrollView, View, Text } from 'react-native';
import React, { Component } from 'react';
import styles from "./css/estilo";

export default class Teorico10Screen extends Component {
  static navigationOptions = {
    title: 'Práctica',
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
    return (
      <ScrollView contentContainerStyle={styles.otherContentContainer}>
        <View style={styles.container}>
          <Text accessible={false} style={styles.subTittleColor}>Práctica</Text>
          <Text accessible={false} style={styles.texto}>Cuando tengas la oportunidad de realizar Coaching a alguien, necesitarás distinguir cuál enemigo del aprendizaje tiene incorporado tu cliente. Por ello, a modo de práctica te proponemos elegir 3 Enemigos del Aprendizaje que reconozcas en ti mismo, escribirlos en tu cuaderno de apuntes y hallar cómo se manifiestan dentro de tus dominios: en lo familiar, laboral, social, etc.{"\n"}{"\n"}
            Ahora que ya eres consciente de aquello que te impide ampliar tu conocimiento, ingresa a la siguiente sección y encuentra material de lectura complementaria que te ayudará a saber más sobre este tema.{"\n"}{"\n"}
            Recuerda que, mientras tu curiosidad y voluntad sean mayores, las barreras al universo que te rodea caerán por si solas.{"\n"}</Text>
        </View>
      </ScrollView>
    );
  }
}