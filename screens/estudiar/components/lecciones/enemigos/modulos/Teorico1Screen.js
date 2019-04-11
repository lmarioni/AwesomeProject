
import RF from "react-native-responsive-fontsize";
import {ScrollView, StyleSheet, FlatList, View, Image, ImageBackground, Text, Dimensions} from 'react-native';
import React, {Component} from 'react';
  const fondo = 'https://www.axonplataforma.com.ar/aca/f/cursoc/fondo.png';
  const imagen_inicio = "https://www.axonplataforma.com.ar/images/5c1d4494037c3.png";
  const resizeMode = 'center';
  
  export default class Teorico1Screen extends Component{
    static navigationOptions = {
      title: 'Introducción',
    };
    render(){
      let dimensions = Dimensions.get("window");
      let imageHeight = Math.round((dimensions.width * 10) / 16);
      let imageWidth = dimensions.width;
      return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <ImageBackground style={{flex: 1, resizeMode}} source={{ uri: fondo }}>
            <View style={styles.container}>
              <Text accessible={false} style={styles.subTittleColor}>Diseña tu futuro ahora</Text>
              <Text accessible={false} style={styles.texto}>¡Estás por dar inicio a tu primera clase teórica! Todas estas lecciones te ayudarán a disminuír la brecha que existe entre la realidad que vives hoy y la Realidad Ideal que quieres alcanzar.{"\n"}{"\n"}Mientras estudies esta lección, fíjate qué necesitas aprender y cuáles son aquellos enemigos del aprendizaje que están impidéndote alcanzar tu Realidad Ideal.</Text>
            </View>
            <Image style={{ height: imageHeight, width: imageWidth }} source={{ uri: imagen_inicio }} resizeMode="stretch"/>
          </ImageBackground>
        </ScrollView>
      );
    }
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
    backgroundColor: '#fff',
    width: "100%",
    height: "100%"
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