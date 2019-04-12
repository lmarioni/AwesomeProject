import { ScrollView, View, Text } from 'react-native';
import React, { Component } from 'react';
import FitImage from 'react-native-fit-image';
import styles from "./css/estilo";

export default class Teorico5Screen extends Component {
  static navigationOptions = {
    title: 'Descubriendo oportunidades',
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