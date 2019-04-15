import { ScrollView, View, Text, Dimensions, Image } from 'react-native';
import React, { Component } from 'react';
import styles from "./css/estilo";
const imagen1 = "https://picsum.photos/500/500/?image=896";
const imagen2 = "https://picsum.photos/500/500/?image=831";
export default class Teorico4Screen extends Component {
  static navigationOptions = {
    title: 'Enemigos del Aprendizaje',
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
    let imageHeight = Math.round((dimensions.width * 10) / 16);
    let imageWidth = dimensions.width;
    let mode = 'center';
    return (
      <ScrollView contentContainerStyle={styles.otherContentContainer}>
        <View style={styles.container}>
          <Text accessible={false} style={styles.subTittleColor}>Hablemos por un momento de objetivos, ¿qué te impide lograrlos?</Text>
          <Image style={{ height: imageHeight, width: imageWidth }} source={{ uri: imagen1 }} resizeMode={mode} />
          <Text accessible={false} style={styles.texto}>Sacarte calificaciones más altas en la escuela, aprender otro idioma, independizarte, conseguir el trabajo deseado, comprar un auto y/o ahorrar para el departamento. <Text style={{ fontWeight: 'bold' }}>¿Te suenan estas metas?</Text>{"\n"}{"\n"}
            Desde nuestra niñez, más de una vez nos hemos planteado objetivos; sin embargo, en algunas ocasiones “algo” se interpuso para conseguirlos.</Text>
          <Text accessible={false} style={styles.texto}>Desde el Coaching Ontológico, diremos que para lograr algo debemos <Text style={{fontWeight: "bold"}}>aprender</Text>. Nuestra forma de ser nos ha permitido lograr muchas cosas, pero también, parte de <Text style={{ fontStyle: 'italic', textDecorationLine: "underline" }}>nuestra forma de ser</Text>, nos limita para otras.</Text>
          <Image style={{ height: imageHeight, width: imageWidth }} source={{ uri: imagen2 }} resizeMode={mode} />
          <Text accessible={false} style={styles.texto}>Esto no se trata de qué tan capaces somos de lograr nuestras metas. Tener dificultades para lograr nuestros objetivos es lo más natural del mundo; sin embargo, al vivir en una sociedad tan acelerada, estamos impulsados a vivir a contrarreloj e ignorar mirar hacia adentro para encontrar nuestros verdaderos obstáculos internos.{"\n"}{"\n"}
            A estos, les llamamos nuestros <Text style={{ fontWeight: 'bold' }}>enemigos del aprendizaje.</Text>{"\n"}</Text>
        </View>
      </ScrollView>
    );
  }
}