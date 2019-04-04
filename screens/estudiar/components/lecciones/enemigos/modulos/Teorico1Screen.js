
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
  
  export default function Teorico1Screen() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          {/*<Text accessible={false} style={styles.title}>1.1 - Introducción</Text>*/}
          <Text accessible={false} style={styles.subTittleRed}>Diseña tu futuro ahora</Text>
          <Text accessible={false} style={styles.texto}>¡Estás por dar inicio a tu primera clase teórica! Todas estas lecciones te ayudarán a disminuír la brecha que existe entre la realidad que vives hoy y la Realidad Ideal que quieres alcanzar.</Text>
          <Text accessible={false} style={styles.texto}>Mientras estudies esta lección, fíjate qué necesitas aprender y cuáles son aquellos enemigos del aprendizaje que están impidéndote alcanzar tu Realidad Ideal.</Text>
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