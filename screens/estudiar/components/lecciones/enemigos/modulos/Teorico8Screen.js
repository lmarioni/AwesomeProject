import { ScrollView, View, Text, Dimensions, Image } from 'react-native';
import React, { Component } from 'react';
import FitImage from 'react-native-fit-image';
import styles from "./css/estilo";
const imagen1 = "https://www.axonplataforma.com.ar/images/PrincipalesEnemigos.png";
const imagen2 = "https://www.axonplataforma.com.ar/images/enemigosdelaprendizaje-05-05.png";
export default class Teorico8Screen extends Component {
  static navigationOptions = {
    title: 'Principales enemigos del aprendizaje',
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
          <Text accessible={false} style={styles.subTittleColor}>Principales enemigos del aprendizaje</Text>
          <Image style={{ height: imageHeight, width: imageWidth }} source={{ uri: imagen1 }} resizeMode={mode} />
          <Text accessible={false} style={styles.texto}>Jurar saberlo todo, es sólo uno de los principales enemigos del aprendizaje; sin embargo, <Text style={{ fontWeight: 'bold' }}>existen muchos más</Text> que, probablemente, reconozcas a continuación:</Text>
          <Text accessible={false} style={styles.texto}>
            1.- <Text style={{ fontStyle: 'italic', textDecorationLine: "underline" }}>Juzgar</Text> a los demás constantemente{"\n"}
            2.- Ser adicto a las respuestas.{"\n"}
            3.- Desautorizar a los demás para que nos enseñen.{"\n"}
            4.- <Text style={{ fontStyle: 'italic', textDecorationLine: "underline" }}>Forzar</Text> a tener todo claro.{"\n"}
            5.- Buscar excusas.{"\n"}
            6.- Hacer del tiempo, tu enemigo por defecto.{"\n"}
            7.- Aclarar a los demás que tú eres así y no puedes aprender o cambiar.{"\n"}
            8.- <Text style={{ fontStyle: 'italic', textDecorationLine: "underline" }}>Interponer el factor edad</Text> antes de siquiera intentar algo.{"\n"}
            9.- Decir "no tengo energía"{"\n"}</Text>
            <Image style={{ height: imageHeight, width: imageWidth }} source={{ uri: imagen2 }} resizeMode={mode} />
          <Text accessible={false} style={styles.subTittleColor}>¿Cuál otro podrías agregar?</Text>
        </View>
      </ScrollView>
    );
  }
}