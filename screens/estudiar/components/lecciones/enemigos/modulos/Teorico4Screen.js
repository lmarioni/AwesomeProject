
import RF from "react-native-responsive-fontsize";
import {
    ScrollView,
    StyleSheet,
    FlatList,
    View,
    Image,
    Text,
  } from 'react-native';

  import React from 'react'
  
  export default function Teorico4Screen() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          {/*<Text accessible={false} style={styles.title}>1.2. ¿Qué es el aprendizaje?</Text>*/}
          <Text accessible={false} style={styles.subTittleRed}>Hablemos por un momento de objetivos, ¿qué te impide lograrlos?</Text>
          <Text accessible={false} style={styles.texto}>Sacarte calificaciones más altas en la escuela, aprender otro idioma, independizarte, conseguir el trabajo deseado, comprar un auto y/o ahorrar para el departamento. ¿Te suenan estas metas?</Text>
          <Text accessible={false} style={styles.texto}>Desde nuestra niñez, más de una vez nos hemos planteado objetivos; sin embargo, en algunas ocasiones “algo” se interpuso para conseguirlos.</Text>
          <Text accessible={false} style={styles.texto}>Desde el Coaching Ontológico, diremos que para lograr algo debemos “aprender”. Nuestra forma de ser nos ha permitido lograr muchas cosas, pero también, parte de nuestra forma de ser, nos limita para otras.</Text>
          <Text accessible={false} style={styles.texto}>Esto no se trata de qué tan capaces somos de lograr nuestras metas. Tener dificultades para lograr nuestros objetivos es lo más natural del mundo; sin embargo, al vivir en una sociedad tan acelerada, estamos impulsados a vivir a contrarreloj e ignorar mirar hacia adentro para encontrar nuestros verdaderos obstáculos internos.</Text>
          <Text accessible={false} style={styles.subTittle}>A estos, les llamamos nuestros enemigos del aprendizaje.</Text>
        </View>
      </ScrollView>
    )
  }
  
const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignSelf: "stretch",
  },
  contentContainer: {
    paddingVertical: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  title: {
    fontSize: RF(4.3),
    textAlign: 'center',
    marginBottom: 20,
  },
  subTittle: {
    fontSize: RF(3),
    textAlign: 'center',
    fontWeight: "bold"
  },
  subTittleRed: {
    fontSize: RF(3),
    textAlign: 'center',
    color: "red",
    fontWeight: "bold"
  },
  estiloBR: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  texto: {
    marginTop:10,
    fontSize: RF(2.8),
    textAlign: 'justify',
    fontWeight: '100',
  }
});