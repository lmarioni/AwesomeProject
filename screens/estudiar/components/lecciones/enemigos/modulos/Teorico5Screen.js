
import RF from "react-native-responsive-fontsize";
import {ScrollView, StyleSheet, FlatList, View, Image, ImageBackground, Text, Dimensions} from 'react-native';
import React, {Component} from 'react';
import FitImage from 'react-native-fit-image';
  
  export default class Teorico5Screen extends Component {
    static navigationOptions = {
      title: 'Descubriendo oportunidades',
    };
    render(){
      let dimensions = Dimensions.get("window");
      let imageHeight = Math.round((dimensions.width * 5) / 16);
      let imageWidth = dimensions.width;
      let imageHeight1 = Math.round((dimensions.width * 2) / 8);
      let imageWidth1 = dimensions.width;
      return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.container}>
            <Text accessible={false} style={styles.subTittleColor}>Descubriendo oportunidades</Text>
            <Text accessible={false} style={styles.texto}>Hoy, nuestra sociedad atraviesa una era de globalización. Hay una mayor comunicación gracias al internet y a su vez, una mayor posibilidad de que a un solo click de búsqueda, encuentres más información de la que esperabas. Un universo con mil y un oportunidades para que amplíes tu visión.{"\n"}</Text>
            <FitImage source={{ uri: 'https://www.axonplataforma.com.ar/images/eda1.png' }} style={styles.fitImage} />
            <Text accessible={false} style={styles.texto}>Sin embargo, en muchas ocasiones preferimos dejar nuestra mente como en la era medieval, pensando que el mundo sólo existe hasta donde nuestros ojos logran ver y que después, hay solo un abismo custodiado por monstruos tenebrosos, sin más que contarnos.{"\n"}{"\n"}
            Eso que logramos ver, es solo un “puntito” dentro del universo en el que vivimos. Lo que en el coaching ontológicollamamos nuestra Caja de Creencias. Dentro de esta caja está:{"\n"}</Text>
            <FitImage source={{ uri: 'https://www.axonplataforma.com.ar/images/enemigosdelaprendizaje-01.png' }} style={styles.fitImage} />
            <Text accessible={false} style={styles.texto}>Lo que sé: Aquello de lo que soy consciente que conozco.{"\n"}{"\n"}
            Lo que sé que no sé: Aquello de lo que soy consciente que existe, pero que sé que desconozco.{"\n"}{"\n"}
            Todos representamos un puntito en este universo; y al momento de hablar desde nuestro saber, con otras personas, decimos que se produce un “choque de puntitos”. En ese momento, tenemos dos posibilidades: quedarnos en nuestro puntito o volverlo más grande, aprendiendo del otro puntito y a su vez, del universo que hay ahí afuera.{"\n"}{"\n"}
            Esto es lo que hay afuera del “puntito”: Posibilidad.{"\n"}</Text>
            <FitImage source={{ uri: 'https://www.axonplataforma.com.ar/images/enemigosdelaprendizaje-02.png' }} style={styles.fitImage} />
          </View>
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
  },
  fitImage: {
    borderRadius: 20,
  },
  fitImageWithSize: {
    height: 100,
    width: 30,
  }
});