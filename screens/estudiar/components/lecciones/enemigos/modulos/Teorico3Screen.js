
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
  
  export default function Teorico4Screen() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          {/*<Text accessible={false} style={styles.title}>1.2. ¿Qué es el aprendizaje?</Text>*/}
          <Text accessible={false} style={styles.subTittleRed}>La Humanidad actual nos invita a re-aprender a relacionarnos</Text>
          <Text accessible={false} style={styles.texto}>Practicamente todas las disciplinas que abordan el desarrollo personal prestan atención a las relaciones. En Axon Training le sumamos el mundo emocional que crean esos seres humanos interconectados.</Text>
          <Text accessible={false} style={styles.texto}>Construimos mundos relacionales en los que participan seres desafiando nuestra forma de adaptarnos al mundo emocional de esa otra persona, que a su vez es siempre cambiante.</Text>
          <Text accessible={false} style={styles.texto}>Estamos expuestos a diferentes estímulos emocinales donde algunos nos permiten acercanos a los demás y otros estímulos nos alejan. El punto clave para aprender una nueva manera de responder asertivamente a esos mundos emocionales de los demás, es reconocerlos en nosotros mismos, distinguirlos, explorarlos y encontrar distintas maneras de administrarlos para lograr vinculos más poderosos, y para saber movernos dentro de esos territorios. Algunas veces tendremos ganas de quedarnos y otras querremos salirnos de allí. Pero ¿Cómo sabremos a donde ir si no distinguimos qué mundo emocional habitamos?</Text>
          <Text accessible={false} style={styles.texto}>Este es el desafío que enfrentamos como humanidad. Aprender otras maneras de entender nuestro Lenguaje y nuestras Emociones. En esta Carrera de Coaching Ontológico profundizarás estos contenidos hasta lograr varios cambios en tu forma de observar el mundo, de manera tal, que seas tu quien elija los mundos emocionales que quiera habitar y aún más: Que seas tu quien cree esos mundos.</Text>
          <Text accessible={false} style={styles.subTittle}>¿Seguimos aprendiendo?</Text>
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