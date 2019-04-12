import { ScrollView, View, Text } from 'react-native';
import React, { Component } from 'react';
import styles from "./css/estilo";

export default class Teorico4Screen extends Component {
  static navigationOptions = {
    title: 'Enemigos del Aprendizaje',
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
          <Text accessible={false} style={styles.subTittleColor}>Hablemos por un momento de objetivos, ¿qué te impide lograrlos?</Text>
          <Text accessible={false} style={styles.texto}>Sacarte calificaciones más altas en la escuela, aprender otro idioma, independizarte, conseguir el trabajo deseado, comprar un auto y/o ahorrar para el departamento. ¿Te suenan estas metas?{"\n"}{"\n"}
            Desde nuestra niñez, más de una vez nos hemos planteado objetivos; sin embargo, en algunas ocasiones “algo” se interpuso para conseguirlos.{"\n"}{"\n"}
            Desde el Coaching Ontológico, diremos que para lograr algo debemos “aprender”. Nuestra forma de ser nos ha permitido lograr muchas cosas, pero también, parte de nuestra forma de ser, nos limita para otras.{"\n"}{"\n"}
            Esto no se trata de qué tan capaces somos de lograr nuestras metas. Tener dificultades para lograr nuestros objetivos es lo más natural del mundo; sin embargo, al vivir en una sociedad tan acelerada, estamos impulsados a vivir a contrarreloj e ignorar mirar hacia adentro para encontrar nuestros verdaderos obstáculos internos.{"\n"}{"\n"}
            <Text style={{ fontWeight: 'bold' }}>A estos, les llamamos nuestros enemigos del aprendizaje.</Text>{"\n"}</Text>
        </View>
      </ScrollView>
    );
  }
}