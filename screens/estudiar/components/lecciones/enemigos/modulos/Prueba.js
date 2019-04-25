import RF from "react-native-responsive-fontsize";
import { Text, ScrollView, StyleSheet, Image } from 'react-native';
import React, {Component } from 'react';
import CardStack, { Card } from 'react-native-card-stack-swiper';

export default class AsentandoConocimiento extends Component {
  static navigationOptions = {
    title: 'Asentando el Conocimiento',
    headerStyle: {
      backgroundColor: '#C2092A',
      borderBottomColor: 'white',
      borderBottomWidth: 3,
    },
    headerTitleStyle: {
      color: 'white'
    },
    backButton:{
      color: "white"
    },
    headerTintColor: "white"
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <CardStack style={styles.content} ref={swiper => { this.swiper = swiper }}>
          <Card style={[styles.card, styles.card1]}>
            <Text style={styles.subTittleColor}>¡Ya casi has finalizado esta lección! Pero antes, repasemos un poco lo aprendido:</Text>
            <Image source={{ uri: 'https://www.axonplataforma.com.ar/images/Ico-Repasemos.png' }} style={styles.fitImage} />
          </Card>
          <Card style={[styles.card, styles.card1]}>
            <Text style={styles.subTittleColor}>Aprendiste que los Enemigos del Aprendizaje son nuestros obstáculos internos.</Text>
            <Image source={{ uri: 'https://www.axonplataforma.com.ar/images/asentandoConocimiento.png' }} style={styles.fitImage} />
          </Card>
          <Card style={[styles.card, styles.card1]}>
            <Text style={styles.subTittleColor}>Descubriste lo que, dentro del coaching ontológico llamamos Caja de creencias.</Text>
            <Image source={{ uri: 'https://www.axonplataforma.com.ar/images/asentandoConocimiento.png' }} style={styles.fitImage} />
          </Card>
          <Card style={[styles.card, styles.card1]}>
            <Text style={styles.subTittleColor}>Te observaste a ti mismo desde tu interior.</Text>
            <Image source={{ uri: 'https://www.axonplataforma.com.ar/images/asentandoConocimiento.png' }} style={styles.fitImage} />
          </Card>
          <Card style={[styles.card, styles.card1]}>
            <Text style={styles.subTittleColor}>Tomaste consciencia entre tu aprender y saber.</Text>
            <Image source={{ uri: 'https://www.axonplataforma.com.ar/images/asentandoConocimiento.png' }} style={styles.fitImage} />
          </Card>
          <Card style={[styles.card, styles.card1]}>
            <Text style={styles.subTittleColor}>Identificaste tus enemigos del aprendizaje.</Text>
            <Image source={{ uri: 'https://www.axonplataforma.com.ar/images/asentandoConocimiento.png' }} style={styles.fitImage} />
          </Card>
          <Card style={[styles.card, styles.card1]}>
            <Text style={styles.textoPreguntas}>Dentro de 6 días, tendrás habilitada la siguiente lección. El tiempo que tendrás a partir de ahora, te recomendamos tomarlo para aplicar lo aprendido en esta lección en tu Realidad ideal para lo cual te inscribiste en esta carrera.</Text>
            <Text style={styles.subTittleColor}>¿Te sirvió esta lección para acercarte a tu Realidad Ideal?</Text>
          </Card>
        </CardStack>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
  },
  content: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subTittleColor: {
    paddingTop: 10,
    fontSize: RF(4),
    textAlign: 'center',
    color: "#C2092A",
    fontWeight: "bold",
    backgroundColor: 'transparent'
  },
  card: {
    width: 320,
    height: "100%",
    minHeight: 450,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: "#C2092A",
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    borderWidth: 4,
  },
  card1: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 6,
    borderColor: "#C2092A",
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
  },
  card2: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 6,
    borderColor: "#C2092A",
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
  },
  label: {
    lineHeight: 400,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    width: 220,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
  orange: {
    width: 55,
    height: 55,
    borderWidth: 6,
    borderColor: '#C2092A',
    borderWidth: 4,
    borderRadius: 55,
    marginTop: -15
  },
  green: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 75,
    borderWidth: 6,
    borderColor: '#C2092A',
  },
  red: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 75,
    borderWidth: 6,
    borderColor: '#C2092A',
  },
  texto: {
    fontSize: RF(3),
    textAlign: 'justify',
    fontWeight: '200',
    backgroundColor: 'transparent',
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
  },
  textoPreguntas: {
    fontSize: RF(3),
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    width: "100%",
    marginTop: 2,
    marginBottom: 2,
    padding: 10,
  },
  textoRespuestas: {
    fontSize: RF(2.5),
    textAlign: 'justify',
    fontWeight: '200',
    backgroundColor: 'transparent',
    width: "100%",
    marginTop: 2,
    marginBottom: 2,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  fitImage: {
    borderRadius: 20,
    height: 150,
    width: 150,
    marginLeft: "25%",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  fitImageWithSize: {
    height: 100,
    width: 30,
  }
});