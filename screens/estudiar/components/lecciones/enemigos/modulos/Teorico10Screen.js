
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
          <Text accessible={false} style={styles.subTittleRed}>Práctica</Text>
          <Text accessible={false} style={styles.texto}>Cuando tengas la oportunidad de realizar Coaching a alguien, necesitarás distinguir cuál enemigo del aprendizaje tiene incorporado tu cliente. Por ello, a modo de práctica te proponemos elegir 3 Enemigos del Aprendizaje que reconozcas en ti mismo, escribirlos en tu cuaderno de apuntes y hallar cómo se manifiestan dentro de tus dominios: en lo familiar, laboral, social, etc.</Text>
          <Text accessible={false} style={styles.texto}>Ahora que ya eres consciente de aquello que te impide ampliar tu conocimiento, ingresa a la siguiente sección y encuentra material de lectura complementaria que te ayudará a saber más sobre este tema.</Text>
          <Text accessible={false} style={styles.texto}>Recuerda que, mientras tu curiosidad y voluntad sean mayores, las barreras al universo que te rodea caerán por si solas.</Text>
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