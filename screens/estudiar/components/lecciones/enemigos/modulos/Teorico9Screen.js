import { ScrollView, View, Text } from 'react-native';
import React, { Component } from 'react';
import styles from "./css/estilo";

export default class Teorico9Screen extends Component {
  static navigationOptions = {
    title: 'Reflexión sobre el tiempo',
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
    return (
      <ScrollView contentContainerStyle={styles.otherContentContainer}>
        <View style={styles.container}>
          <Text accessible={false} style={styles.subTittleColor}>Reflexión sobre el tiempo</Text>
          <Text accessible={false} style={styles.texto}>Antes de finalizar con esta lección, te invitamos a reflexionar con el siguiente artículo sobre el Tiempo, redactado por nuestras docentes Natalia Risso y Lorena Nardi.</Text>
          <Text accessible={false} style={styles.subTittleColor}>El Tiempo: nuestro mayor enemigo</Text>
          <Text accessible={false} style={styles.texto}>Como verás, el proceso de aprendizaje que propone el Coaching Ontológico es aprender a aprender. Esto abre la posibilidad de cambiar nuestra forma de interpretar el mundo y accionar en él de distintas maneras.{"\n"}{"\n"}
            Aprender requiere de dar el primer paso, saliendo de aquella zona que conocemos y soltando nuestras certezas para aventurarnos a lo desconocido. Esto puede resultar inquietante, pero implica tomar decisiones y es común que ante estas situaciones podamos sentir angustia o miedo.{"\n"}{"\n"}
            Por lo general, ante el sentido de vacío que provoca lo desconocido, preferimos quedarnos en lo que ya conocemos y muchas veces, antes de dar el paso inicial nos aferramos a esa rutina que ya tenemos pautada, destinando nuestro tiempo a lo que consideramos “seguro” sin percatarnos que de dicho modo, cerramos posibilidad a nuevas actividades y aprendizajes.{"\n"}{"\n"}
            Al sumar una nueva actividad a nuestra rutina, podría pasar que aparezcan las siguientes preguntas en nuestra conversación interna: “¿Tendré tiempo para esto?”, “¿en qué tiempo lo haré?”, “¿cuánto tiempo me demandará?”; también pueda pasar que nos prometamos asumir ciertas actitudes, como: “Le dedicaré una hora a esto, por día” o “seguramente pueda encontrar el tiempo para dedicar a esto”. Puede que en el transitar por la experiencia cumplamos lo propuesto, pero si esto no sucede buscamos darle sentido como seres humanos, explicando desde lo que nos es conocido, lo que hasta el momento venía funcionando; quizás con excusas o dando justificaciones que nos dan la razón de cierto modo y nos tranquilizan.{"\n"}{"\n"}
            Es así como aparecen explicaciones, tales como: “En este momento esto no es lo mío”, “ahora no tengo tiempo” o “quizás más adelante le dedique el tiempo que merece”; pero lo que pasa no es una cuestión de tiempo, sino el quiénes somos frente al recurso del tiempo y las elecciones que hacemos para administrarlo.{"\n"}{"\n"}
            Las creencias que tenemos frente al tiempo pueden limitarnos o ayudarnos a crecer. Disponernos un tiempo de calidad puede resultar más provechoso que tener muchas horas libres.{"\n"}{"\n"}
            ¿Cuántas veces hemos creído que para realizar una actividad importante es necesario dedicar muchas horas al día? Destinar tiempo de calidad, brindar toda la atención y concentración a aquellas actividades que nos interesa realizar, podría ser suficiente para lograr un objetivo. Entonces, si el sentido del tiempo depende de cada quién y su puntito de creencias, te invitamos a reflexionar:{"\n"}{"\n"}
            1.- ¿Qué significa el tiempo para ti?{"\n"}
            2.- ¿Qué harías distinto si no supieras que existe?{"\n"}
            3.- ¿Cómo puede el tiempo convertirse en tu amigo del aprendizaje?{"\n"}</Text>
        </View>
      </ScrollView>
    );
  }
}