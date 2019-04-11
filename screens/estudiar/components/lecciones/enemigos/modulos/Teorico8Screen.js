import RF from "react-native-responsive-fontsize";
import {ScrollView, StyleSheet, FlatList, View, Image, ImageBackground, Text, Dimensions} from 'react-native';
import React, {Component} from 'react';
import FitImage from 'react-native-fit-image';
  
  export default class Teorico8Screen extends Component {
    static navigationOptions = {
      title: 'Principales enemigos del aprendizaje',
    };
    render(){
      return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.container}>
            <Text accessible={false} style={styles.subTittleColor}>Principales enemigos del aprendizaje</Text>
            <Text accessible={false} style={styles.texto}>Jurar saberlo todo, es sólo uno de los principales enemigos del aprendizaje; sin embargo, existen muchos más que, probablemente, reconozcas a continuación:{"\n"}{"\n"}
            1.- Juzgar a los demás constantemente{"\n"}
            2.- Ser adicto a las respuestas.{"\n"}
            3.- Desautorizar a los demás para que nos enseñen.{"\n"}
            4.- Forzar a tener todo claro.{"\n"}
            5.- Buscar excusas.{"\n"}
            6.- Hacer del tiempo, tu enemigo por defecto.{"\n"}
            7.- Aclarar a los demás que tú eres así y no puedes aprender o cambiar.{"\n"}
            8.- Interponer el factor edad antes de siquiera intentar algo.{"\n"}
            9.- Decir "no tengo energía"{"\n"}</Text>
            <FitImage source={{ uri: 'https://www.axonplataforma.com.ar/images/enemigosdelaprendizaje-05-05.png' }} style={styles.fitImage} />
            <Text accessible={false} style={styles.subTittleColor}>¿Cuál otro podrías agregar?</Text>
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