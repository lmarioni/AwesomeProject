
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
          <Text accessible={false} style={styles.subTittleRed}>Principales enemigos del aprendizaje</Text>
          <Text accessible={false} style={styles.texto}>Jurar saberlo todo, es sólo uno de los principales enemigos del aprendizaje; sin embargo, existen muchos más que, probablemente, reconozcas a continuación.</Text>
          <Text accessible={false} style={styles.texto}>Juzgar a los demás constantemente</Text>
          <Text accessible={false} style={styles.texto}>Ser adicto a las respuestas.</Text>
          <Text accessible={false} style={styles.texto}>Desautorizar a los demás para que nos enseñen.</Text>
          <Text accessible={false} style={styles.texto}>Forzar a tener todo claro.</Text>
          <Text accessible={false} style={styles.texto}>Buscar excusas.</Text>
          <Text accessible={false} style={styles.texto}>Hacer del tiempo, tu enemigo por defecto..</Text>
          <Text accessible={false} style={styles.texto}>Aclarar a los demás que tú eres así y no puedes aprender o cambiar.</Text>
          <Text accessible={false} style={styles.texto}>Interponer el factor edad antes de siquiera intentar algo.</Text>
          <Text accessible={false} style={styles.texto}>Decir "no tengo energía"</Text>
          <Image key={1} style={{width: 300,height: 300,}} source={{ uri: "https://www.axonplataforma.com.ar/images/enemigosdelaprendizaje-05-05.png" }} />
          <Text accessible={false} style={styles.subTittleRed}>¿Cuál otro podrías agregar?</Text>
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