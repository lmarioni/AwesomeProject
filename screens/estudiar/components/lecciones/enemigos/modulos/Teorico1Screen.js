
import { ScrollView, View, Image, ImageBackground, Text, Dimensions } from 'react-native';
import React, { Component } from 'react';
import styles from "./css/estilo";
const fondo = 'https://www.axonplataforma.com.ar/aca/f/cursoc/fondo.png';
const imagen_inicio = "https://www.axonplataforma.com.ar/images/5c1d4494037c3.png";
const resizeMode = 'center';
export default class Teorico1Screen extends Component {
  static navigationOptions = {
    title: 'Introducción',
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
    let dimensions = Dimensions.get("window");
    let imageHeight = Math.round((dimensions.width * 10) / 16);
    let imageWidth = dimensions.width;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <ImageBackground style={{ flex: 1, resizeMode }} source={{ uri: fondo }}>
          <View style={styles.container}>
            <Text accessible={false} style={styles.subTittleColor}>Diseña tu futuro ahora</Text>
            <Text accessible={false} style={styles.texto}>¡Estás por dar inicio a tu primera clase teórica! Todas estas lecciones te ayudarán a disminuír la brecha que existe entre la realidad que vives hoy y la Realidad Ideal que quieres alcanzar.{"\n"}{"\n"}Mientras estudies esta lección, fíjate qué necesitas aprender y cuáles son aquellos enemigos del aprendizaje que están impidéndote alcanzar tu Realidad Ideal.</Text>
          </View>
          <Image style={{ height: imageHeight, width: imageWidth }} source={{ uri: imagen_inicio }} resizeMode="stretch" />
        </ImageBackground>
      </ScrollView>
    );
  }
}