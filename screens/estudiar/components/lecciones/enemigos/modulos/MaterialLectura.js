import RF from "react-native-responsive-fontsize";
import { ScrollView, StyleSheet, View, Text, Linking, Image, TouchableHighlight, WebView} from 'react-native';
import React, {Component} from 'react';
export default class MaterialLectura extends Component {
    static navigationOptions = {
        title: 'Material de Lectura',
        headerStyle: {
          backgroundColor: '#0081C4',
          borderBottomColor: 'white',
          borderBottomWidth: 3,
        },
        headerTitleStyle: {
          color: 'white'
        },
        backButton:{
          color: "white"
        },
        headerTintColor: "white"
    };
    render(){
        const {navigate} = this.props.navigation;
        const source = {uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf',cache:true};
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.container}>
                <Text accessible={false} style={styles.subTittleColor}>Material de Lectura</Text>
                <Text accessible={false} style={styles.texto}><Text style={{ fontWeight: 'bold' }}>Queremos impulsarte a aprender mucho más</Text> que esta lección; por ello, te invitamos a descargar  el siguiente material complementario que encontrarás a continuación:
                </Text>
                <TouchableHighlight
                    style={styles.item}
                    underlayColor='#d8d8d8'
                    onPress={() => navigate('Video1', {
                    // leccionId: item.id,
                    // leccionNombre: item.nombre,
                    })}
                >
                <View style={styles.contenido}>
                    <Text accessible={false} style={styles.texto}>1.- Video de Sir Ken Robinson: Cambios de Paradigmas en la educación</Text>
                </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.item}
                    underlayColor='#d8d8d8'
                    onPress={() => navigate('Lectura', {
                    // leccionId: item.id,
                    // leccionNombre: item.nombre,
                    })}
                >
                <View style={styles.contenido}>
                    <Text accessible={false} style={styles.texto}>2.- Paper: Aprendizaje Ontológico (Lectura Obligatoria)</Text>
                </View>
                </TouchableHighlight>
            </View>
        </ScrollView>
        )
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