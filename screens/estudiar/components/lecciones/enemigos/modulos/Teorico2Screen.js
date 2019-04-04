
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
  
  export default function Teorico2Screen() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          {/*<Text accessible={false} style={styles.title}>1.2. ¿Qué es el aprendizaje?</Text>*/}
          <Text accessible={false} style={styles.subTittleRed}>¿Qué es Aprendizaje?</Text>
          <Text accessible={false} style={styles.texto}>Para empezar, te contaremos un poco sobre el Aprendizaje en términos del Coaching Ontológico. Cuando hablamos de Aprendizaje, nos referimos a adquirir conocimientos no sólo de lo exterior, también de nuestro interior; emprendiendo un viaje que nos permitirá saber más sobre nuestra historia personal, cultural, aquello que hemos heredado y así, enriquecer nuestra relación con nosotros mismos.</Text>
          <Text accessible={false} style={styles.texto}>Cuando aprendemos sobre nosotros y sobre el universo, nos transformamos. Nos convertimos en seres conscientes sobre nuestros estados de ánimo, relatos históricos, obstáculos, cuerpo, y mucho más.</Text>
          <Text accessible={false} style={styles.texto}>Normalmente el Aprendizaje Tradicional se concentra en el "saber" y en aquello que se puede "probar":</Text>
          <Text accessible={false} style={styles.texto}>- ¿Se puede tocar?</Text>
          <Text accessible={false} style={styles.texto}>- ¿Se puede medir de alguna forma?</Text>
          <Text accessible={false} style={styles.texto}>- ¿Hay un fundamento teórico que lo sostenga?</Text>
          <Text accessible={false} style={styles.texto}>- ¿Está dentro de lo que se vé?</Text>
          <Text accessible={false} style={styles.texto}>A partir de esto, podríamos decir que eso sí es Saber; sin embargo, este tipo de aprendizaje no tiene en cuenta aspectos del Ser, tales como: las emociones, el espíritu y nuestro mundo interior.</Text>
          <Text accessible={false} style={styles.texto}>Con el pasar del tiempo, el Mundo Interior se ha ido convirtiendo en una imaginación. No se toca, no se mide, no se conoce cómo funciona ni se entiende; pues como sabemos, las emociones no pueden medirse en el sistema métrico decimal.</Text>
          <Text accessible={false} style={styles.texto}>- La sensación de ternura de una madre cuando abraza a su hijo no puede cuantificarse.</Text>
          <Text accessible={false} style={styles.texto}>- Las lágrimas de alegría al volver a vernos no caben en una pipeta graduada.</Text>
          <Text accessible={false} style={styles.texto}>- Una mirada profunda, el contacto visual de ojos con ojos no puede medirse en centímetros de distancia.</Text>
          <Text accessible={false} style={styles.subTittle}>El Mundo Interior y el aprendizaje actual están en problemas.</Text>
          <Text accessible={false} style={styles.subTittle}>El Mundo Interno está inmerso en una soledad infinita.</Text>
          <Text accessible={false} style={styles.texto}>Por alguna de estas razones estás tomando esta carrera. El Coaching Ontológico nace como necesidad de conectar nuevamente esos dos mundos.</Text>
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