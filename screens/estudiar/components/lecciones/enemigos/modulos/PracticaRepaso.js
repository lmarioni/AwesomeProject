import RF from "react-native-responsive-fontsize";
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { PureComponent, Component } from 'react';
import CardStack, { Card } from 'react-native-card-stack-swiper';

export default class PracticaRepaso extends Component {
  static navigationOptions = {
    title: 'Práctica de repaso',
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
            <Text style={styles.subTittleColor}>Repasemos</Text>
            <Text style={styles.texto}>Respondé las preguntas para saber cuánto aprendiste de la lección. Recordá que si salís de la evaluación antes de terminar todas las preguntas, tu progreso se guardará y lo podras seguir luego.</Text>
            <Image source={{ uri: 'https://www.axonplataforma.com.ar/images/Ico-Repasemos.png' }} style={styles.fitImage} />
          </Card>
          <Card style={[styles.card, styles.card1]}>
            <Text style={styles.subTittleColor}>Bienvenido</Text>
            <Text style={styles.texto}>Por favór, respondé las siguientes preguntas. Recordá que si salís de la evaluación antes de terminar todas las preguntas, tu progreso se guardará y lo podras seguir luego.</Text>
            <Image source={{ uri: 'https://www.axonplataforma.com.ar/images/Ico-Bienvenida.png' }} style={styles.fitImage} />
          </Card>
          <Card style={[styles.card, styles.card1]}>
            <Text style={styles.subTittleColor}>Pregunta N° 1</Text>
            <Text style={styles.textoPreguntas}>¿Qué hay adentro del puntito?</Text>
            <Text style={styles.textoRespuestas}>Lo que sé y nada más. (Por ejemplo, "sé cocinar", "sé lo que debería hacer mi jefe")</Text>
            <Text style={styles.textoRespuestas}>Lo que sé y también lo que sé que no sé. (Por ejemplo, “sé cocinar, "sé lo que debería hacer mi jefe", "sé que no sé hablar chino", "sé que no sé de programación informática")</Text>
            <Text style={styles.textoRespuestas}>Todo lo que no sé que no sé. (Por ejemplo, "lo desconocido")</Text>
          </Card>
          <Card style={[styles.card, styles.card1]}>
            <Text style={styles.subTittleColor}>Pregunta N° 2</Text>
            <Text style={styles.textoPreguntas}>El concepto de “la caja” (lo que “no sé que no sé”), desde el Coaching ontológico es interpretado como:</Text>
            <Text style={styles.textoRespuestas}>Es una mala noticia saber lo que no va a pasar, porque no tengo certezas y siempre hay que tener certezas. (Por ejemplo, "no voy a sumarme a este nuevo proyecto porque nunca hice algo parecido")</Text>
            <Text style={styles.textoRespuestas}>Es un camino de incertidumbre, que no es ni buena ni mala noticia. Radica en cada uno cómo ve esa incertidumbre. (Por ejemplo, "como nunca lo hice no sé lo que va a pasar, voy a probar")</Text>
            <Text style={styles.textoRespuestas}>Siempre debemos tener certezas, por lo que no es acertado elegir un camino de incertidumbre. (Por ejemplo, "cómo voy a realizar el siguiente proyecto si no tengo certezas de que va a funcionar")</Text>
          </Card>
          <Card style={[styles.card, styles.card1]}>
            <Text style={styles.subTittleColor}>Pregunta N° 3</Text>
            <Text style={styles.textoPreguntas}>Tu mejor amigo te dice que tiene una nueva opción de empleo en la empresa que tanto deseaba, aunque está en duda de aceptarlo porque en su actual trabajo está cómodo. Si bien hay cosas que lo incomodan, estas incomodidades son las mismas de siempre. ¿Desde dónde está conversando?</Text>
            <Text style={styles.textoRespuestas}>La incertidumbre de no saber lo que va a pasar, desde lo que "no sé que no sé".</Text>
            <Text style={styles.textoRespuestas}>Desde adentro de su "puntito", donde se encuentra todo lo que "sé que sé" y lo "sé que no sé".</Text>
            <Text style={styles.textoRespuestas}>Desde ninguna de las dos. Está hablando desde sus emociones.</Text>
          </Card>
          <Card style={[styles.card, styles.card1]}>
            <Text style={styles.subTittleColor}>Pregunta N° 4</Text>
            <Text style={styles.textoPreguntas}>Una persona de 60 años de edad comparte la siguiente conversación contigo: - …"no puedo aprender Coaching en forma virtual dado que ya estoy grande y no sé usar la computadora"… Estamos frente a un Enemigo del Aprendizaje. ¿Cuál es?</Text>
            <Text style={styles.textoRespuestas}>No puedo aprender dado mi falta de tiempo.</Text>
            <Text style={styles.textoRespuestas}>Querer tener todo claro, todo el tiempo.</Text>
            <Text style={styles.textoRespuestas}>No puedo aprender dado que soy así.</Text>
          </Card>
          <Card style={[styles.card, styles.card1]}>
            <Text style={styles.subTittleColor}>Pregunta N° 5</Text>
            <Text style={styles.textoPreguntas}>Una persona que está haciendo un curso rápido de cocina te comparte la siguiente conversación: - …"Estoy muy ocupado para desarrollar nuevas capacidades a largo plazo, ya no sé de dónde sacar más tiempo para hacer lo que me gusta. Prefiero los cursos cortos"… Estamos frente a un Enemigo del Aprendizaje. ¿Cuál es?</Text>
            <Text style={styles.textoRespuestas}>No puedo aprender dado que soy así.</Text>
            <Text style={styles.textoRespuestas}>No puedo aprender dado mi falta de tiempo.</Text>
            <Text style={styles.textoRespuestas}>Incapacidad de declarar ignorancia.</Text>
          </Card>
          <Card style={[styles.card, styles.card1]}>
            <Text style={styles.subTittleColor}>Pregunta N° 6</Text>
            <Text style={styles.textoPreguntas}>Una persona te comparte la siguiente conversación: - …"Vivo permanentemente informado. Necesito tener información para sostener mi imagen de persona actualizada"… Estamos frente a un Enemigo del Aprendizaje. ¿Cuál es?</Text>
            <Text style={styles.textoRespuestas}>No dar autoridad a los demás para que te enseñen.</Text>
            <Text style={styles.textoRespuestas}>No reconocer lo nuevo como nuevo.</Text>
            <Text style={styles.textoRespuestas}>Adicción a las respuestas.</Text>
          </Card>
          <Card style={[styles.card, styles.card1]}>
            <Text style={styles.subTittleColor}>Pregunta N° 7</Text>
            <Text style={styles.textoPreguntas}>Distinguiendo el "puntito" de esta Lección, un ejemplo de lo que sé que sé, podría ser:</Text>
            <Text style={styles.textoRespuestas}>Yo sé que no sé hablar chino.</Text>
            <Text style={styles.textoRespuestas}>Yo sé lo que deberían hacer los demás.</Text>
            <Text style={styles.textoRespuestas}>Yo sé de Matemáticas.</Text>
          </Card>
          <Card style={[styles.card, styles.card1]}>
            <Text style={styles.subTittleColor}>Pregunta N° 8</Text>
            <Text style={styles.textoPreguntas}>Distinguiendo el "puntito" de esta Lección, un ejemplo de lo que "no sé que no sé", podría ser:</Text>
            <Text style={styles.textoRespuestas}>Yo sé que no sé cocinar.</Text>
            <Text style={styles.textoRespuestas}>No sé qué va a ocurrir porque no tuve la experiencia.</Text>
            <Text style={styles.textoRespuestas}>No sé de Ingeniería civil.</Text>
          </Card>
          <Card style={[styles.card, styles.card1]}>
            <Text style={styles.subTittleColor}>Pregunta N° 9</Text>
            <Text style={styles.textoPreguntas}>¿Qué son los Enemigos del Aprendizaje?</Text>
            <Text style={styles.textoRespuestas}>Son aquellos elementos que permiten aprender.</Text>
            <Text style={styles.textoRespuestas}>Son aquellos oponentes internos/externos que me imposibilitan aprender.</Text>
            <Text style={styles.textoRespuestas}>Los Enemigos del Aprendizaje no existen.</Text>
          </Card>
          <Card style={[styles.card, styles.card1]}>
            <Text style={styles.subTittleColor}>Pregunta N° 10</Text>
            <Text style={styles.textoPreguntas}>El "no tengo tiempo" es:</Text>
            <Text style={styles.textoRespuestas}>Una realidad que no puedes cambiar.</Text>
            <Text style={styles.textoRespuestas}>Un obstáculo que no permite hacer lo que quieres.</Text>
            <Text style={styles.textoRespuestas}>Una conversación interna que tienes contigo mismo.</Text>
          </Card>
          <Card style={[styles.card, styles.card1]}>
            <Text style={styles.subTittleColor}>Felicitaciones! Terminaste la lección:)</Text>
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