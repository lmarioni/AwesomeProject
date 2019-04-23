import { ScrollView, View, Text, Image, Dimensions} from 'react-native';
import React, { Component } from 'react'
import styles from "./css/estilo";
const imagen1 = "https://www.axonplataforma.com.ar/images/Re-aprendiendoArelacionarnos01.png";
const imagen2 = "https://www.axonplataforma.com.ar/images/Re-aprendiendoARelacionarnos02.png";
export default class Teorico4Screen extends Component {
  static navigationOptions = {
    title: 'Re-aprendiendo a relacionarnos',
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
          <Text accessible={false} style={styles.subTittleColor}>La Humanidad actual nos invita a re-aprender a relacionarnos</Text>
          <Image style={{ height: imageHeight, width: imageWidth }} source={{ uri: imagen1 }} resizeMode={mode} />
          <Text accessible={false} style={styles.texto}>Practicamente todas las disciplinas que abordan el desarrollo personal prestan atención a las relaciones. <Text style={{ fontWeight: 'bold' }}>En Axon Training le sumamos el mundo emocional</Text> que crean esos seres humanos interconectados.{"\n"}{"\n"}
            Construimos mundos relacionales en los que participan seres desafiando nuestra forma de adaptarnos al mundo emocional de esa otra persona, que a su vez es siempre cambiante.</Text>
          <Text accessible={false} style={styles.texto}>Estamos expuestos a diferentes estímulos emocinales donde algunos nos permiten acercanos a los demás y otros estímulos nos alejan. El punto clave para aprender una nueva manera de responder asertivamente a esos mundos emocionales de los demás, es reconocerlos en nosotros mismos, distinguirlos, explorarlos y encontrar distintas maneras de administrarlos para lograr vinculos más poderosos, y para saber movernos dentro de esos territorios. Algunas veces tendremos ganas de quedarnos y otras querremos salirnos de allí. Pero <Text style={{ fontWeight: 'bold' }}>¿Cómo sabremos a donde ir si no distinguimos qué mundo emocional habitamos?</Text></Text>
          <Image style={{ height: imageHeight, width: imageWidth }} source={{ uri: imagen2 }} resizeMode={mode} />
          <Text accessible={false} style={styles.texto}>
            Este es el <Text style={{ fontWeight: 'bold' }}>desafío que enfrentamos como humanidad:</Text> aprender otras maneras de entender nuestro Lenguaje y nuestras Emociones. En esta Carrera de Coaching Ontológico profundizarás estos contenidos hasta lograr varios cambios en <Text style={{ fontStyle: 'italic', textDecorationLine: "underline" }}>tu forma de observar el mundo</Text>, de manera tal, que seas tu quien elija los mundos emocionales que quiera habitar y aún más: Que seas tu quien cree esos mundos.{"\n"}{"\n"}
            <Text accessible={false} style={styles.subTittleColor}>¿Seguimos aprendiendo?</Text>
          </Text>
        </View>
      </ScrollView>
    );
  }
}