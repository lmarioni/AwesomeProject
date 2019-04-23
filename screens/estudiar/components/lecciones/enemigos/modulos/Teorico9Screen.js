import { ScrollView, View, Text, Dimensions, Image } from 'react-native';
import React, { Component } from 'react';
import styles from "./css/estilo";
const imagen1 = "https://www.axonplataforma.com.ar/images/Reflexionsobreeltiempo01.png";
const imagen2 = "https://www.axonplataforma.com.ar/images/Reflexionsobreeltiempo02.png";
const imagen3 = "https://www.axonplataforma.com.ar/images/Reflexionsobreeltiempo03.png";
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
    let dimensions = Dimensions.get("window");
    let imageHeight = Math.round((dimensions.width * 9) / 16);
    let imageWidth = dimensions.width;
    let mode = 'center';
    return (
      <ScrollView contentContainerStyle={styles.otherContentContainer}>
        <View style={styles.container}>
          <Text accessible={false} style={styles.subTittleColor}>¿Por qué el tiempo se interpone?</Text>
          <Image style={{ height: imageHeight, width: imageWidth }} source={{ uri: imagen1 }} resizeMode={mode} />
          <Text accessible={false} style={styles.texto}>Antes de finalizar con esta lección, <Text style={{ fontWeight: 'bold' }}>te invitamos a reflexionar</Text> con el siguiente artículo sobre el Tiempo, redactado por nuestras docentes Natalia Risso y Lorena Nardi.</Text>
          <Text accessible={false} style={styles.subTittleColor}>El Tiempo: nuestro mayor enemigo</Text>
          <Text accessible={false} style={styles.texto}>Como verás, el proceso de aprendizaje que propone el Coaching Ontológico es <Text style={{ fontWeight: 'bold' }}>aprender a aprender</Text>. Esto abre la posibilidad de cambiar nuestra forma de interpretar el mundo y accionar en él de distintas maneras.{"\n"}{"\n"}
            Aprender requiere de dar el primer paso, saliendo de aquella zona que conocemos y soltando nuestras certezas para aventurarnos a lo desconocido. Esto puede resultar inquietante, pero implica tomar decisiones y es común que ante estas situaciones podamos sentir angustia o miedo.{"\n"}{"\n"}
            Por lo general, ante el sentido de vacío que provoca lo desconocido, preferimos quedarnos en lo que ya conocemos y muchas veces, antes de dar el paso inicial nos aferramos a esa rutina que ya tenemos pautada, destinando nuestro tiempo a lo que consideramos “seguro” sin percatarnos que de dicho modo, cerramos posibilidad a nuevas actividades y aprendizajes.</Text>
          <Image style={{ height: imageHeight, width: imageWidth }} source={{ uri: imagen2 }} resizeMode={mode} />
          <Text accessible={false} style={styles.texto}>Al sumar una nueva actividad a nuestra rutina, podría pasar que aparezcan las siguientes preguntas en nuestra conversación interna: “<Text style={{ fontStyle: 'italic' }}>¿Tendré tiempo para esto?</Text>”, “<Text style={{ fontStyle: 'italic' }}>¿en qué tiempo lo haré?</Text>”, “<Text style={{ fontStyle: 'italic' }}>¿cuánto tiempo me demandará?</Text>”; también pueda pasar que nos prometamos asumir ciertas actitudes, como: “<Text style={{ fontStyle: 'italic' }}>Le dedicaré una hora a esto, por día</Text>” o “<Text style={{ fontStyle: 'italic' }}>seguramente pueda encontrar el tiempo para dedicar a esto</Text>”. Puede que en el transitar por la experiencia cumplamos lo propuesto, pero si esto no sucede buscamos darle sentido como seres humanos, explicando desde lo que nos es conocido, lo que hasta el momento venía funcionando; quizás con excusas o dando justificaciones que nos dan la razón de cierto modo y nos tranquilizan.{"\n"}{"\n"}
            Es así como aparecen explicaciones, tales como: “<Text style={{ fontStyle: 'italic' }}>En este momento esto no es lo mío</Text>”, “<Text style={{ fontStyle: 'italic' }}>ahora no tengo tiempo</Text>” o “<Text style={{ fontStyle: 'italic' }}>quizás más adelante le dedique el tiempo que merece</Text>”; pero lo que pasa no es una cuestión de tiempo, sino el quiénes somos frente al recurso del tiempo y las elecciones que hacemos para administrarlo.{"\n"}{"\n"}
            Las creencias que tenemos frente al tiempo pueden <Text style={{ fontWeight: 'bold' }}>limitarnos o ayudarnos a crecer</Text>. Disponernos un <Text style={{ fontWeight: 'bold' }}>tiempo de calidad</Text> puede resultar más provechoso que tener muchas horas libres.</Text>
            <Image style={{ height: imageHeight, width: imageWidth }} source={{ uri: imagen3 }} resizeMode={mode} />
            <Text accessible={false} style={styles.texto}>¿Cuántas veces hemos creído que para realizar una actividad importante es necesario dedicar muchas horas al día? Destinar tiempo de calidad, brindar toda la atención y concentración a aquellas actividades que nos interesa realizar, podría ser suficiente para lograr un objetivo. Entonces, si el sentido del tiempo depende de cada quién y su puntito de creencias, te invitamos a reflexionar:{"\n"}{"\n"}
            1.- ¿Qué significa el tiempo para ti?{"\n"}
            2.- ¿Qué harías distinto si no supieras que existe?{"\n"}
            3.- ¿Cómo puede el tiempo convertirse en tu <Text style={{ fontWeight: 'bold' }}>amigo del aprendizaje</Text>?{"\n"}</Text>
        </View>
      </ScrollView>
    );
  }
}