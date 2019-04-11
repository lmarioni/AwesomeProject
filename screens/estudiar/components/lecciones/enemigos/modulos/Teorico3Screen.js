
import RF from "react-native-responsive-fontsize";
import { ScrollView, StyleSheet, FlatList, View, Image, Text, ImageBackground} from 'react-native';
import React, {Component} from 'react'
  
  export default class Teorico4Screen extends Component{
    static navigationOptions = {
      title: 'Re-aprendiendo a relacionarnos',
    };
    render(){
      return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
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
  }
});