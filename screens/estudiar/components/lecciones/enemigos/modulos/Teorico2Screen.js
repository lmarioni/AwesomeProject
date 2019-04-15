
import { ScrollView, View, Text, Image, Dimensions} from 'react-native';
import React, { Component } from 'react';
import styles from "./css/estilo";
const imagen1 = "https://picsum.photos/500/500/?image=777";
const imagen2 = "https://picsum.photos/500/500/?image=335";
export default class Teorico2Screen extends Component {
  static navigationOptions = {
    title: 'Qué es el Aprendizaje',
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
            <Text accessible={false} style={styles.subTittleColor}>¿Qué es Aprendizaje?</Text>
            <Image style={{ height: imageHeight, width: imageWidth }} source={{ uri: imagen1 }} resizeMode={mode} />
            <Text accessible={false} style={styles.texto}>
              Para empezar, te contaremos un poco sobre el Aprendizaje en términos del <Text style={{ fontStyle: 'italic', textDecorationLine: "underline" }}>Coaching Ontológico</Text>. Cuando hablamos de Aprendizaje, nos referimos a adquirir conocimientos no sólo de lo exterior, también de nuestro interior; emprendiendo un viaje que nos permitirá saber más sobre nuestra historia personal, cultural, aquello que hemos heredado y así, <Text style={{ fontWeight: 'bold' }}>enriquecer nuestra relación con nosotros mismos</Text>.</Text>
              <Text accessible={false} style={styles.texto}>Cuando aprendemos sobre nosotros y sobre el universo, nos transformamos. Nos convertimos en <Text style={{ fontWeight: 'bold', color: "#C2092A" }}>seres conscientes</Text> sobre nuestros estados de ánimo, relatos históricos, obstáculos, cuerpo, y mucho más.</Text>
              <Image style={{ height: imageHeight, width: imageWidth }} source={{ uri: imagen2 }} resizeMode={mode} />
              <Text accessible={false} style={styles.texto}>Normalmente el Aprendizaje Tradicional se concentra en el <Text style={{ fontWeight: 'bold' }}>saber</Text> y en aquello que se puede <Text style={{ fontWeight: 'bold' }}>probar</Text>:{"\n"}{"\n"}
              - ¿Se puede tocar?{"\n"}
              - ¿Se puede medir de alguna forma?{"\n"}
              - ¿Hay un fundamento teórico que lo sostenga?{"\n"}
              - ¿Está dentro de lo que se vé?{"\n"}{"\n"}
              A partir de esto, podríamos decir que eso sí es Saber; sin embargo, <Text style={{ fontStyle: 'italic', textDecorationLine: "underline" }}>este tipo de aprendizaje no tiene en cuenta aspectos del Ser</Text>, tales como: las emociones, el espíritu y nuestro mundo interior.</Text>
              <Text accessible={false} style={styles.texto}>Con el pasar del tiempo, el Mundo Interior se ha ido convirtiendo en una imaginación. No se toca, no se mide, no se conoce cómo funciona ni se entiende; pues como sabemos, <Text style={{ fontWeight: 'bold' }}>las emociones no pueden medirse</Text> en el sistema métrico decimal.{"\n"}{"\n"}
              - La sensación de ternura de una madre cuando abraza a su hijo no puede cuantificarse.{"\n"}
              - Las lágrimas de alegría al volver a vernos no caben en una pipeta graduada.{"\n"}
              - Una mirada profunda, el contacto visual de ojos con ojos no puede medirse en centímetros de distancia.</Text>
              <Text accessible={false} style={styles.subTittleColor}>El Mundo Interior y el aprendizaje actual están en problemas.</Text>
              <Text accessible={false} style={styles.texto}><Text style={{ fontWeight: 'bold' }}>El Mundo Interno está inmerso en una soledad infinita.</Text>{"\n"}{"\n"}
              Por alguna de estas razones estás tomando esta carrera. El Coaching Ontológico nace como necesidad de conectar nuevamente esos dos mundos.
              </Text>
          </View>
      </ScrollView>
    );
  }
}