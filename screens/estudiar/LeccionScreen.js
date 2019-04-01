import React, { Component } from 'react';

import { Text,View, StyleSheet } from 'react-native';
// import Carousel from "react-native-carousel-control";
// import T1 from "./components/lecciones/enemigos/tarjetas/T1";
// import T2 from "./components/lecciones/enemigos/tarjetas/T2";
// import T3 from "./components/lecciones/enemigos/tarjetas/T3";
// import T4 from "./components/lecciones/enemigos/tarjetas/T4";

import { Platform } from 'expo-core';
import RF from "react-native-responsive-fontsize";
import { ScrollView } from 'react-native-gesture-handler';
export default class LeccionScreen extends Component {

static navigationOptions = (
  Platform.OS === 'ios' ?  
  navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('leccionNombre', 'Estudiar'),
        };
      } :
      navigationOptions = {
            header: null,
      }
) 

  constructor(){
    super();
 
  }

  componentDidMount(){

  }

    render () {
      const { navigation } = this.props;

        return (
          <ScrollView style={styles.container}>


            <Text accessible={false} style={styles.title}>Bienvenido...</Text>
            <Text accessible={false} style={styles.subTittle}>¡Estás por dar inicio a tu primera clase teórica!</Text>
            <View style={{marginBottom:RF(0.2)}} />
            <Text accessible={false} style={styles.texto}> Todas estas lecciones te ayudarán a disminuír la brecha que existe entre la realidad que vives hoy y la Realidad Ideal que quieres alcanzar. </Text>
            <View style={{marginBottom:RF(0.2)}} />
            <Text accessible={false} style={styles.texto}> Mientras estudies esta lección, fíjate qué necesitas aprender y cuáles son aquellos enemigos del aprendizaje que están impidéndote alcanzar tu Realidad Ideal. </Text>
            <View style={{marginBottom:20}} />
              <Text style={[styles.title,{color:'#4286f4'}]}>¿Qué es Aprendizaje?</Text>
              <Text style={styles.subTittle}>¡Para empezar, te contaremos un poco sobre el Aprendizaje en términos del Coaching Ontológico.!</Text>
              <View style={{marginBottom:10}} />
              <Text style={styles.texto}> 
              Cuando hablamos de Aprendizaje, nos referimos a adquirir conocimientos no sólo de lo exterior, también de nuestro interior; emprendiendo un viaje que nos permitirá saber más sobre nuestra historia personal, cultural, aquello que hemos heredado y así, enriquecer nuestra relación con nosotros mismos.
              </Text>   
              <Text style={styles.texto}> 
                Cuando aprendemos sobre nosotros y sobre el universo, nos transformamos. Nos convertimos en seres conscientes sobre nuestros estados de ánimo, relatos históricos, obstáculos, cuerpo, y mucho más.
                </Text>  
                <Text style={styles.texto}>
                  Normalmente el Aprendizaje Tradicional se concentra en el "saber" y en aquello que se puede "probar":
                </Text> 
                <Text style={styles.texto}>- ¿Se puede tocar? </Text> 
                <Text style={styles.texto}>- ¿Se puede medir de alguna forma? </Text> 
                <Text style={styles.texto}>- ¿Hay un fundamento teórico que lo sostenga? </Text> 
                <Text style={styles.texto}>- ¿Está dentro de lo que se vé?</Text> 
                <View style={{marginBottom:10}} />

                <Text style={styles.texto}> 
                A partir de esto, podríamos decir que eso sí es Saber; sin embargo, este tipo de aprendizaje no tiene en cuenta aspectos del Ser, tales como: las emociones, el espíritu y nuestro mundo interior.
                </Text>

                <Text style={styles.texto}> 
                Con el pasar del tiempo, el Mundo Interior se ha ido convirtiendo en una imaginación. No se toca, no se mide, no se conoce cómo funciona ni se entiende; pues como sabemos, las emociones no pueden medirse en el sistema métrico decimal.
                </Text>
                <Text style={styles.texto}> 
                - La sensación de ternura de una madre cuando abraza a su hijo no puede cuantificarse.                
                </Text>
                <Text style={styles.texto}> 
                - Las lágrimas de alegría al volver a vernos no caben en una pipeta graduada.
                </Text>
                <Text style={styles.texto}> 
                - Una mirada profunda, el contacto visual de ojos con ojos no puede medirse en centímetros de distancia.
                </Text>
                <Text style={[styles.texto,{textAlign: 'center',fontWeight:'300'}]}> 
                  El Mundo Interior y el aprendizaje actual están en problemas. 
                </Text>
                <Text style={[styles.texto,{textAlign: 'center',fontWeight:'300'}]}> 
                  El Mundo Interno está inmerso en una soledad infinita.
                </Text>
                <Text style={styles.texto}> 
                Por alguna de estas razones estás tomando esta carrera. El Coaching Ontológico nace como necesidad de conectar nuevamente esos dos mundos.
                </Text>
                <View style={{marginBottom:20}} />
                <Text style={[styles.title,{color:'#4286f4'}]}>
                La Humanidad actual nos invita a re-aprender a relacionarnos
                </Text>
                <Text style={styles.texto}> 
                Practicamente todas las disciplinas que abordan el desarrollo personal prestan atención a las relaciones. En Axon Training le sumamos el mundo emocional que crean esos seres humanos interconectados.
                </Text>
                <Text style={styles.texto}> 
                Construimos mundos relacionales en los que participan seres desafiando nuestra forma de adaptarnos al mundo emocional de esa otra persona, que a su vez es siempre cambiante.
                </Text>
                <Text style={styles.texto}> 
                Estamos expuestos a diferentes estímulos emocinales donde algunos nos permiten acercanos a los demás y otros estímulos nos alejan. El punto clave para aprender una nueva manera de responder asertivamente a esos mundos emocionales de los demás, es reconocerlos en nosotros mismos, distinguirlos, explorarlos y encontrar distintas maneras de administrarlos para lograr vinculos más poderosos, y para saber movernos dentro de esos territorios. Algunas veces tendremos ganas de quedarnos y otras querremos salirnos de allí. Pero... 
                </Text>
                <Text style={[styles.texto,{fontWeight:'300',textAlign:'center'}]}> 
                ¿Cómo sabremos a donde ir si no distinguimos qué mundo emocional habitamos?
                </Text>

                <Text style={styles.texto}> 
                Este es el desafío que enfrentamos como humanidad. Aprender otras maneras de entender nuestro Lenguaje y nuestras Emociones. En esta Carrera de Coaching Ontológico profundizarás estos contenidos hasta lograr varios cambios en tu forma de observar el mundo, de manera tal, que seas tu quien elija los mundos emocionales que quiera habitar y aún más: Que seas tu quien cree esos mundos.
                </Text>
                
                <Text style={styles.texto}> 
                
                </Text>
                <Text style={styles.texto}> 
                
                </Text>
                <Text style={styles.texto}> 
                
                </Text>
                <Text style={styles.texto}> 
                
                </Text>
                <Text style={styles.texto}> 
                
                </Text>
                <Text style={styles.texto}> 
                
                </Text>



          </ScrollView>
        );
    }
}
let padding = 0;
if(Platform.OS === 'android'){
   padding = '5%';
}else{
   padding = 0;
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      // justifyContent: "center",
      alignSelf: "stretch",
      backgroundColor: 'white',
      paddingTop: padding,
      paddingLeft: 15,
      paddingRight: 15,
      marginTop: 10,
  },
  page: {
      flex: 1,
      backgroundColor: 'white',
      borderRadius: 10,
      marginTop: 10,
      paddingLeft: 15,
      paddingRight: 15,
  },
  title: {
    fontSize: RF(5),
    textAlign: 'center',
    marginBottom: 20,
  },
  subTittle: {
    fontSize: RF(3.5),
    textAlign: 'center',
  },
  texto: {
    marginTop:10,
    fontSize: RF(2.8),
    textAlign: 'justify',
    fontWeight: '300',
  }
});
