
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
  
  export default function Teorico5Screen() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          {/*<Text accessible={false} style={styles.title}>1.2. ¿Qué es el aprendizaje?</Text>*/}
          <Text accessible={false} style={styles.subTittleRed}>Descubriendo oportunidades</Text>
          <Text accessible={false} style={styles.texto}>Hoy, nuestra sociedad atraviesa una era de globalización. Hay una mayor comunicación gracias al internet y a su vez, una mayor posibilidad de que a un solo click de búsqueda, encuentres más información de la que esperabas. Un universo con mil y un oportunidades para que amplíes tu visión.</Text>
          <Image key={1} style={{width: 300,height: 100,}} source={{ uri: "https://www.axonplataforma.com.ar/images/eda1.png" }} />
          <Text accessible={false} style={styles.texto}>Sin embargo, en muchas ocasiones preferimos dejar nuestra mente como en la era medieval, pensando que el mundo sólo existe hasta donde nuestros ojos logran ver y que después, hay solo un abismo custodiado por monstruos tenebrosos, sin más que contarnos.</Text>
          <Text accessible={false} style={styles.texto}>Eso que logramos ver, es solo un “puntito” dentro del universo en el que vivimos. Lo que en el coaching ontológicollamamos nuestra Caja de Creencias. Dentro de esta caja está:</Text>
          <Image key={2} style={{width: 300,height: 300,}} source={{ uri: "https://www.axonplataforma.com.ar/images/enemigosdelaprendizaje-01.png" }} />
          <Text accessible={false} style={styles.texto}>Lo que sé: Aquello de lo que soy consciente que conozco.</Text>
          <Text accessible={false} style={styles.texto}>Lo que sé que no sé: Aquello de lo que soy consciente que existe, pero que sé que desconozco.</Text>
          <Text accessible={false} style={styles.texto}>Todos representamos un puntito en este universo; y al momento de hablar desde nuestro saber, con otras personas, decimos que se produce un “choque de puntitos”. En ese momento, tenemos dos posibilidades: quedarnos en nuestro puntito o volverlo más grande, aprendiendo del otro puntito y a su vez, del universo que hay ahí afuera.</Text>
          <Text accessible={false} style={styles.subTittle}>Esto es lo que hay afuera del “puntito”: Posibilidad.</Text>
          <Image key={3} style={{width: 300,height: 300,}} source={{ uri: "https://www.axonplataforma.com.ar/images/enemigosdelaprendizaje-02.png" }} />
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