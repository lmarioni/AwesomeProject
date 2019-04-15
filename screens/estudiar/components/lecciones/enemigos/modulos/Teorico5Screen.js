import { ScrollView, View, Text, Image, Dimensions } from 'react-native';
import React, { Component } from 'react';
import FitImage from 'react-native-fit-image';
import styles from "./css/estilo";
const imagen1 = "https://picsum.photos/500/500/?image=849";
export default class Teorico5Screen extends Component {
  static navigationOptions = {
    title: 'Descubriendo oportunidades',
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
          <Text accessible={false} style={styles.subTittleColor}>Descubriendo oportunidades</Text>
          <Image style={{ height: imageHeight, width: imageWidth }} source={{ uri: imagen1 }} resizeMode={mode} />
          <Text accessible={false} style={styles.texto}>Hoy, <Text style={{ fontWeight: 'bold' }}>nuestra sociedad atraviesa una era de globalización</Text>. Hay una mayor comunicación gracias al internet y a su vez, una mayor posibilidad de que a un solo click de búsqueda, encuentres más información de la que esperabas. Un universo con mil y un oportunidades para que amplíes tu visión</Text>
          <FitImage source={{ uri: 'https://www.axonplataforma.com.ar/images/eda1.png' }} style={styles.fitImage} />
          <Text accessible={false} style={styles.texto}>Sin embargo, en muchas ocasiones preferimos dejar nuestra mente como en la era medieval, pensando que el mundo sólo existe hasta donde nuestros ojos logran ver y que después, hay solo un abismo custodiado por monstruos tenebrosos, sin más que contarnos.{"\n"}{"\n"}
            Eso que logramos ver, es solo un <Text style={{ fontWeight: 'bold' }}>puntito</Text> dentro del universo en el que vivimos. Lo que en el coaching ontológicollamamos nuestra <Text style={{ fontWeight: 'bold' }}>Caja de Creencias</Text>. Dentro de esta caja está:{"\n"}</Text>
          <FitImage source={{ uri: 'https://www.axonplataforma.com.ar/images/enemigosdelaprendizaje-01.png' }} style={styles.fitImage} />
          <Text accessible={false} style={styles.texto}><Text style={{ fontWeight: 'bold' }}>Lo que sé:</Text> Aquello de lo que soy consciente que conozco.{"\n"}{"\n"}
          <Text style={{ fontWeight: 'bold' }}>Lo que sé que no sé:</Text> Aquello de lo que soy consciente que existe, pero que sé que desconozco.{"\n"}{"\n"}
            Todos representamos un puntito en este universo; y al momento de hablar desde nuestro saber, con otras personas, decimos que se produce un <Text style={{ fontStyle: 'italic', textDecorationLine: "underline" }}>choque de puntitos</Text>. En ese momento, tenemos dos posibilidades: quedarnos en nuestro puntito o volverlo más grande, aprendiendo del otro puntito y a su vez, del universo que hay ahí afuera.{"\n"}{"\n"}
            Esto es lo que hay afuera del “puntito”: <Text style={{ fontWeight: 'bold' }}>Posibilidad</Text>.{"\n"}</Text>
          <FitImage source={{ uri: 'https://www.axonplataforma.com.ar/images/enemigosdelaprendizaje-02.png' }} style={styles.fitImage} />
        </View>
      </ScrollView>
    );
  }
}