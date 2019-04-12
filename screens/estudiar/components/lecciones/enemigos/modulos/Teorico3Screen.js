import { ScrollView, View, Text } from 'react-native';
import React, { Component } from 'react'
import styles from "./css/estilo";

export default class Teorico4Screen extends Component {
  static navigationOptions = {
    title: 'Re-aprendiendo a relacionarnos',
    headerStyle: {
      backgroundColor: '#0081C4',
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
          <Text accessible={false} style={styles.subTittleColor}>La Humanidad actual nos invita a re-aprender a relacionarnos</Text>
          <Text accessible={false} style={styles.texto}>Practicamente todas las disciplinas que abordan el desarrollo personal prestan atención a las relaciones. En Axon Training le sumamos el mundo emocional que crean esos seres humanos interconectados.{"\n"}{"\n"}
            Construimos mundos relacionales en los que participan seres desafiando nuestra forma de adaptarnos al mundo emocional de esa otra persona, que a su vez es siempre cambiante.{"\n"}{"\n"}
            Estamos expuestos a diferentes estímulos emocinales donde algunos nos permiten acercanos a los demás y otros estímulos nos alejan. El punto clave para aprender una nueva manera de responder asertivamente a esos mundos emocionales de los demás, es reconocerlos en nosotros mismos, distinguirlos, explorarlos y encontrar distintas maneras de administrarlos para lograr vinculos más poderosos, y para saber movernos dentro de esos territorios. Algunas veces tendremos ganas de quedarnos y otras querremos salirnos de allí. Pero ¿Cómo sabremos a donde ir si no distinguimos qué mundo emocional habitamos?{"\n"}{"\n"}
            Este es el desafío que enfrentamos como humanidad. Aprender otras maneras de entender nuestro Lenguaje y nuestras Emociones. En esta Carrera de Coaching Ontológico profundizarás estos contenidos hasta lograr varios cambios en tu forma de observar el mundo, de manera tal, que seas tu quien elija los mundos emocionales que quiera habitar y aún más: Que seas tu quien cree esos mundos.{"\n"}{"\n"}
            <Text style={{ fontWeight: 'bold' }}>¿Seguimos aprendiendo?</Text>{"\n"}</Text>
        </View>
      </ScrollView>
    );
  }
}