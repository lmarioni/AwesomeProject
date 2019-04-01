
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
  
  export default function T3() {
    return (
      <View >
        <Text style={styles.texto}> 
        Cuando aprendemos sobre nosotros y sobre el universo, nos transformamos. Nos convertimos en seres conscientes sobre nuestros estados de ánimo, relatos históricos, obstáculos, cuerpo, y mucho más.
        </Text>   
        <View style={{marginBottom:10}} />
        <Text style={styles.texto}> 
        
        </Text>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "stretch",
    },
    title: {
      fontSize: RF(4.3),
      textAlign: 'center',
      marginBottom: 20,
    },
    subTittle: {
      fontSize: RF(3),
      textAlign: 'center',
    },
    texto: {
      marginTop:10,
      fontSize: RF(2.8),
      textAlign: 'center',
      fontWeight: '100',
    }
  });
