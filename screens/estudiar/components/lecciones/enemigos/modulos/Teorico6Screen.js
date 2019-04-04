
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
          <Image key={1} style={{width: 300,height: 300,}} source={{ uri: "https://www.axonplataforma.com.ar/images/enemigosdelaprendizaje-03.png" }} />
          <Text accessible={false} style={styles.subTittleRed}>¿Qué sucede con aquellos que pretenden saberlo todo?</Text>
          <Text accessible={false} style={styles.texto}>En el coaching, trabajamos aquello que es nuestra propia observación. Esto, nos llevará a descubrir cuáles son esos enemigos internos que podrían estar condicionando nuestro aprendizaje, haciendo que este sea menor de lo que pretendemos.</Text>
          <Text accessible={false} style={styles.texto}>Aquellos que dicen no necesitar aprender más, no necesariamente se trata de personas expertas; sino de gente dominada por un enemigo del aprendizaje, al que llamamos LA PROPIA IMAGEN.</Text>
          <Text accessible={false} style={styles.texto}>Para aquellas personas, su compromiso está enfocado en defender su PROPIA IMAGEN PÚBLICA. Por ello, sea la pregunta que le hagas, se limitará a respondértela desde su saber y este, lo defenderá con uñas y dientes.</Text>
          <Text accessible={false} style={styles.texto}>¿Te imaginas a esa persona conversando sobre Política? ¿Maltrato familiar? ¿El próximo vuelo que planea la NASA?</Text>
          <Text accessible={false} style={styles.texto}>Para ellos, SABER DE TODO es su orgullo; pero no se trata de estar 100% informados, sino que defienden a muerte su punto de vista, determinándolo como LA VERDAD indiscutible.</Text>
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