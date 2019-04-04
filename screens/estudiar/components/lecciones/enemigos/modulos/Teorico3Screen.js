
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
  
  export default function Teorico3Screen() {
    return (
      <View style={styles.container}>
   
      <Text accessible={false} style={styles.title}>Bienvenido 3...</Text>
    
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


// import RF from "react-native-responsive-fontsize";
// import {
//     ScrollView,
//     StyleSheet,
//     FlatList,
//     View,
//     Image,
//     Text,
//   } from 'react-native';


//   import React from 'react'
  
//   export default function T2() {
//     return (
//       <View >
//       <Text style={styles.title}>¿Qué es Aprendizaje?</Text>
//       <Text style={styles.subTittle}>¡Para empezar, te contaremos un poco sobre el Aprendizaje en términos del Coaching Ontológico.!</Text>
//       <View style={{marginBottom:10}} />
//       <Text style={styles.texto}> 
//       Cuando hablamos de Aprendizaje, nos referimos a adquirir conocimientos no sólo de lo exterior, también de nuestro interior; emprendiendo un viaje que nos permitirá saber más sobre nuestra historia personal, cultural, aquello que hemos heredado y así, enriquecer nuestra relación con nosotros mismos.
//       </Text>   
// </View>
//     )
//   }

//   const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignSelf: "stretch",
//     },
//     title: {
//       fontSize: RF(4.3),
//       textAlign: 'center',
//       marginBottom: 20,
//     },
//     subTittle: {
//       fontSize: RF(3),
//       textAlign: 'center',
//     },
//     texto: {
//       marginTop:10,
//       fontSize: RF(2.8),
//       textAlign: 'center',
//       fontWeight: '100',
//     }
//   });

