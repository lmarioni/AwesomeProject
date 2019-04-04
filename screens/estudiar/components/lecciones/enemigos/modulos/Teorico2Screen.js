
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
  
  export default function Teorico2Screen() {
    return (
      <View style={styles.container}>
   
      <Text accessible={false} style={styles.title}>Bienvenido 2...</Text>
    
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