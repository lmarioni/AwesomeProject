
import { ScrollView, View, Image, Text, Dimensions } from 'react-native';
import React, { Component } from 'react';
import styles from "./css/estilo";
let imagen_inicio = "https://www.axonplataforma.com.ar/images/5c1d4494037c3.png";
export default class Teorico1Screen extends Component {
  static navigationOptions = {
    title: 'Introducción',
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
    let mode = 'stretch';
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text accessible={false} style={styles.subTittleColor}>Diseña tu futuro ahora</Text>
          <Image style={{ height: imageHeight, width: imageWidth }} source={{ uri: imagen_inicio }} resizeMode={mode} />
          <Text accessible={false} style={styles.texto}>¡Estás por dar inicio a tu primera clase teórica! Todas estas lecciones te ayudarán a disminuír la brecha que existe entre <Text style={{ fontStyle: 'italic', textDecorationLine: "underline" }}>la realidad que vives hoy y la Realidad Ideal que quieres alcanzar</Text>.{"\n"}{"\n"}Mientras estudies esta lección, fíjate <Text style={{ fontWeight: 'bold', color: "#C2092A" }}>qué necesitas aprender</Text> y cuáles son aquellos enemigos del aprendizaje que están impidéndote alcanzar tu Realidad Ideal.</Text>
        </View>
      </ScrollView>
    );
  }
}