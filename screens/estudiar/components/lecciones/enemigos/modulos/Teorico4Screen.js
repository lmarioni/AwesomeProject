
import RF from "react-native-responsive-fontsize";
import { ScrollView, StyleSheet, FlatList, View, Image, Text, ImageBackground} from 'react-native';
import React from 'react'
  
  export default function Teorico4Screen() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text accessible={false} style={styles.subTittleColor}>Hablemos por un momento de objetivos, ¿qué te impide lograrlos?</Text>
          <Text accessible={false} style={styles.texto}>Sacarte calificaciones más altas en la escuela, aprender otro idioma, independizarte, conseguir el trabajo deseado, comprar un auto y/o ahorrar para el departamento. ¿Te suenan estas metas?{"\n"}{"\n"}
          Desde nuestra niñez, más de una vez nos hemos planteado objetivos; sin embargo, en algunas ocasiones “algo” se interpuso para conseguirlos.{"\n"}{"\n"}
          Desde el Coaching Ontológico, diremos que para lograr algo debemos “aprender”. Nuestra forma de ser nos ha permitido lograr muchas cosas, pero también, parte de nuestra forma de ser, nos limita para otras.{"\n"}{"\n"}
          Esto no se trata de qué tan capaces somos de lograr nuestras metas. Tener dificultades para lograr nuestros objetivos es lo más natural del mundo; sin embargo, al vivir en una sociedad tan acelerada, estamos impulsados a vivir a contrarreloj e ignorar mirar hacia adentro para encontrar nuestros verdaderos obstáculos internos.{"\n"}{"\n"}
          <Text style={{ fontWeight: 'bold' }}>A estos, les llamamos nuestros enemigos del aprendizaje.</Text>{"\n"}</Text>
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