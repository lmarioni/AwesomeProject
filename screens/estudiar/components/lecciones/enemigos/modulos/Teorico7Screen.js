import { ScrollView, View, Text, Dimensions, Image } from 'react-native';
import React, { Component } from 'react';
import FitImage from 'react-native-fit-image';
import styles from "./css/estilo";
const imagen1 = "https://picsum.photos/500/500/?image=695";
export default class Teorico7Screen extends Component {
  static navigationOptions = {
    title: 'Conociendo nuestra capacidad',
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
          <Text accessible={false} style={styles.subTittleColor}>Entonces¿Cuánto sabes?</Text>
          <Image style={{ height: imageHeight, width: imageWidth }} source={{ uri: imagen1 }} resizeMode={mode} />
          <Text accessible={false} style={styles.texto}>En la actualidad se valora muchísimo <Text style={{ fontWeight: 'bold' }}>CUÁNTO SABEMOS</Text>; sin embargo, esto ha dado paso a que muchos olvidemos <Text style={{ fontWeight: 'bold' }}>CUÁNTO SOMOS CAPACES DE APRENDER</Text>.{"\n"}{"\n"}
            Vayamos a un caso fácil de identificar. El personal de contratación de una empresa, cuando pasa por la etapa de selección, tienden a pensar: <Text style={{ fontStyle: 'italic' }}>“Cuanto más experiencia tenga, mejor es el candidato al puesto”</Text>; sin embargo, <Text style={{ fontStyle: 'italic', textDecorationLine: "underline" }}>no siempre se cumple</Text> que, quien sabe más, consigue los mejores resultados.{"\n"}{"\n"}
            Podemos observar algo similar en nuestro círculo de amigos. No necesariamente aquellas personas que nos conocieron en la niñez, son hoy nuestros más grandes amigos; sino <Text style={{ fontWeight: 'bold' }}>aquellos que se abrieron a conocernos mejor</Text> y dejar que los conozcamos.{"\n"}{"\n"}
            Asimismo, si hablamos de la familia, un buen hijo no es sólo aquel que sabe y aplica lo que les hemos enseñado; es también aquel que ante la experiencia que va adquiriendo a medida que se abre a la sociedad, aprende y enseña cómo la sociedad cambió para las personas de su edad; ayudándote a ser un padre más informado y a desarrollar una empatía mayor.</Text>
          <FitImage source={{ uri: 'https://www.axonplataforma.com.ar/images/enemigosdelaprendizaje-04.png' }} style={styles.fitImage} />
        </View>
      </ScrollView>
    );
  }
}