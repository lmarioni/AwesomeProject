
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
  
  export default function Teorico6Screen() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          {/*<Text accessible={false} style={styles.title}>1.2. ¿Qué es el aprendizaje?</Text>*/}
          <Text accessible={false} style={styles.subTittleRed}>Conociendo nuestra capacidad</Text>
          <Text accessible={false} style={styles.subTittle}>Entonces¿Cuánto sabes?</Text>
          <Text accessible={false} style={styles.texto}>En la actualidad se valora muchísimo CUÁNTO SABEMOS; sin embargo, esto ha dado paso a que muchos olvidemos CUÁNTO SOMOS CAPACES DE APRENDER.</Text>
          <Text accessible={false} style={styles.texto}>Vayamos a un caso fácil de identificar. El personal de contratación de una empresa, cuando pasa por la etapa de selección, tienden a pensar: “Cuanto más experiencia tenga, mejor es el candidato al puesto”; sin embargo, no siempre se cumple que, quien sabe más, consigue los mejores resultados.</Text>
          <Text accessible={false} style={styles.texto}>Podemos observar algo similar en nuestro círculo de amigos. No necesariamente aquellas personas que nos conocieron en la niñez, son hoy nuestros más grandes amigos; sino aquellos que se abrieron a conocernos mejor y dejar que los conozcamos.</Text>
          <Text accessible={false} style={styles.texto}>Asimismo, si hablamos de la familia, un buen hijo no es sólo aquel que sabe y aplica lo que les hemos enseñado; es también aquel que ante la experiencia que va adquiriendo a medida que se abre a la sociedad, aprende y enseña cómo la sociedad cambió para las personas de su edad; ayudándote a ser un padre más informado y a desarrollar una empatía mayor.</Text>
          <Image key={1} style={{width: 330,height: 300,}} source={{ uri: "https://www.axonplataforma.com.ar/images/enemigosdelaprendizaje-04.png" }} />
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