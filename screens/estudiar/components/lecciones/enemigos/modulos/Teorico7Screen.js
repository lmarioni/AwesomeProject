import RF from "react-native-responsive-fontsize";
import {ScrollView, StyleSheet, FlatList, View, Image, ImageBackground, Text, Dimensions} from 'react-native';
import React, {Component} from 'react';
import FitImage from 'react-native-fit-image';
  
  export default class Teorico7Screen extends Component {
    static navigationOptions = {
      title: 'Conociendo nuestra capacidad',
      headerStyle: {
        backgroundColor: '#0081C4',
        borderBottomColor: 'white',
        borderBottomWidth: 3,
      },
      headerTitleStyle: {
        color: 'white'
      },
      backButton:{
        color: "white"
      }
    };
    render(){
      return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.container}>
            <Text accessible={false} style={styles.subTittleColor}>Conociendo nuestra capacidad</Text>
            <Text accessible={false} style={styles.subTittle}>Entonces¿Cuánto sabes?</Text>
            <Text accessible={false} style={styles.texto}>En la actualidad se valora muchísimo CUÁNTO SABEMOS; sin embargo, esto ha dado paso a que muchos olvidemos CUÁNTO SOMOS CAPACES DE APRENDER.{"\n"}{"\n"}
            Vayamos a un caso fácil de identificar. El personal de contratación de una empresa, cuando pasa por la etapa de selección, tienden a pensar: “Cuanto más experiencia tenga, mejor es el candidato al puesto”; sin embargo, no siempre se cumple que, quien sabe más, consigue los mejores resultados.{"\n"}{"\n"}
            Podemos observar algo similar en nuestro círculo de amigos. No necesariamente aquellas personas que nos conocieron en la niñez, son hoy nuestros más grandes amigos; sino aquellos que se abrieron a conocernos mejor y dejar que los conozcamos.{"\n"}{"\n"}
            Asimismo, si hablamos de la familia, un buen hijo no es sólo aquel que sabe y aplica lo que les hemos enseñado; es también aquel que ante la experiencia que va adquiriendo a medida que se abre a la sociedad, aprende y enseña cómo la sociedad cambió para las personas de su edad; ayudándote a ser un padre más informado y a desarrollar una empatía mayor.</Text>
            <FitImage source={{ uri: 'https://www.axonplataforma.com.ar/images/enemigosdelaprendizaje-04.png' }} style={styles.fitImage} />
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