import React, { Component } from 'react'
import {ScrollView, StyleSheet, TouchableHighlight, View, Text, Image} from 'react-native';

export default class LeccionScreen extends Component {
  constructor() {
    super();
    this.state = {
        result: 0
    };
  }
  static navigationOptions = {
    title: 'Enemigos del Aprendizaje',
    headerStyle: {
      backgroundColor: '#C2092A',
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
  getResponse(result){
    this.setState({result});
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <React.Fragment>
        <ScrollView contentContainerStyle={styles.contentContainer}>
        <TouchableHighlight
            style={styles.item}
            underlayColor='#d8d8d8'
            onPress={() => navigate('VideoExplicativo', {title: 'Video Explicativo'})}
          >
            <View style={styles.contenido}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 25 }}
                source={{ uri: "https://www.axonplataforma.com.ar/images/Ico-videoexplicativo1.1.png" }}
              />
              <Text style={styles.itemText}>Vídeo Explicativo</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.item}
            underlayColor='#d8d8d8'
            onPress={() => navigate('Teorico1Screen', {title: 'Instrucción'})}
          >
            <View style={styles.contenido}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 25 }}
                source={{ uri: "https://www.axonplataforma.com.ar/images/Ico-1.2.png" }}
              />
              <Text style={styles.itemText}>Introducción</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.item}
            underlayColor='#d8d8d8'
            onPress={() => this.props.navigation.navigate('Teorico2Screen', {
              // leccionId: item.id,
              // leccionNombre: item.nombre,
            })}
          >
            <View style={styles.contenido}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 25 }}
                source={{ uri: "https://www.axonplataforma.com.ar/images/Ico-1.3.png" }}
              />
              <Text style={styles.itemText}>¿Qué es el Aprendizaje?</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.item}
            underlayColor='#d8d8d8'
            onPress={() => this.props.navigation.navigate('Teorico3Screen', {
              // leccionId: item.id,
              // leccionNombre: item.nombre,
            })}
          >
            <View style={styles.contenido}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 25 }}
                source={{ uri: "https://www.axonplataforma.com.ar/images/Ico-1.4.png" }}
              />
              <Text style={styles.itemText}>Re-aprendiendo a relacionarnos</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.item}
            underlayColor='#d8d8d8'
            onPress={() => this.props.navigation.navigate('Teorico4Screen', {
              // leccionId: item.id,
              // leccionNombre: item.nombre,
            })}
          >
            <View style={styles.contenido}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 25 }}
                source={{ uri: "https://www.axonplataforma.com.ar/images/Ico-1.5.png" }}
              />
              <Text style={styles.itemText}>Enemigos del Aprendizaje</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.item}
            underlayColor='#d8d8d8'
            onPress={() => this.props.navigation.navigate('Teorico5Screen', {
              // leccionId: item.id,
              // leccionNombre: item.nombre,
            })}
          >
            <View style={styles.contenido}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 25 }}
                source={{ uri: "https://www.axonplataforma.com.ar/images/Ico-1.6.png" }}
              />
              <Text style={styles.itemText}>Descubriendo oportunidades</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.item}
            underlayColor='#d8d8d8'
            onPress={() => this.props.navigation.navigate('Teorico6Screen', {
              // leccionId: item.id,
              // leccionNombre: item.nombre,
            })}
          >
            <View style={styles.contenido}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 25 }}
                source={{ uri: "https://www.axonplataforma.com.ar/images/Ico-1.7.png" }}
              />
              <Text style={styles.itemText}>La propia imagen</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.item}
            underlayColor='#d8d8d8'
            onPress={() => this.props.navigation.navigate('Teorico7Screen', {
              // leccionId: item.id,
              // leccionNombre: item.nombre,
            })}
          >
            <View style={styles.contenido}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 25 }}
                source={{ uri: "https://www.axonplataforma.com.ar/images/Ico-1.8.png" }}
              />
              <Text style={styles.itemText}>Conociendo nuestra capacidad</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.item}
            underlayColor='#d8d8d8'
            onPress={() => this.props.navigation.navigate('Teorico8Screen', {
              // leccionId: item.id,
              // leccionNombre: item.nombre,
            })}
          >
            <View style={styles.contenido}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 25 }}
                source={{ uri: "https://www.axonplataforma.com.ar/images/Ico-1.9.png" }}
              />
              <Text style={styles.itemText}>Principales enemigos del aprendizaje</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.item}
            underlayColor='#d8d8d8'
            onPress={() => this.props.navigation.navigate('Teorico9Screen', {
              // leccionId: item.id,
              // leccionNombre: item.nombre,
            })}
          >
            <View style={styles.contenido}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 25 }}
                source={{ uri: "https://www.axonplataforma.com.ar/images/Ico-1.10.png" }}
              />
              <Text style={styles.itemText}>Reflexión sobre el tiempo</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.item}
            underlayColor='#d8d8d8'
            onPress={() => this.props.navigation.navigate('Teorico10Screen', {
              // leccionId: item.id,
              // leccionNombre: item.nombre,
            })}
          >
            <View style={styles.contenido}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 25 }}
                source={{ uri: "https://www.axonplataforma.com.ar/images/practica.png" }}
              />
              <Text style={styles.itemText}>Práctica</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.item}
            underlayColor='#d8d8d8'
            onPress={() => this.props.navigation.navigate('MaterialLectura', {
              // leccionId: item.id,
              // leccionNombre: item.nombre,
            })}
          >
            <View style={styles.contenido}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 25 }}
                source={{ uri: "https://www.axonplataforma.com.ar/images/materialDeLectura.png" }}
              />
              <Text style={styles.itemText}>Material Lectura</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.item}
            underlayColor='#d8d8d8'
            onPress={() => this.props.navigation.navigate('PracticaRepaso', {
              // leccionId: item.id,
              // leccionNombre: item.nombre,
            })}
          >
            <View style={styles.contenido}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 25 }}
                source={{ uri: "https://www.axonplataforma.com.ar/images/practicaDeRepaso.png" }}
              />
              <Text style={styles.itemText}>Práctica de Repaso</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.item}
            underlayColor='#d8d8d8'
            onPress={() => this.props.navigation.navigate('AsentandoConocimiento', {
              // leccionId: item.id,
              // leccionNombre: item.nombre,
            })}
          >
            <View style={styles.contenido}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 25 }}
                source={{ uri: "https://www.axonplataforma.com.ar/images/asentandoConocimiento.png" }}
              />
              <Text style={styles.itemText}>Asentando el Conocimiento</Text>
            </View>
          </TouchableHighlight>

        </ScrollView>
      </React.Fragment>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
  },
  contentContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  item: {
    backgroundColor: '#fff',
    height: 70,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#C2092A',
  },
  itemText: {
    color: 'black',
    fontSize: 15,
    fontWeight: '100',
    paddingLeft: 15,
    width: '80%'
  },
  contenido: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  itemBlock: {
    backgroundColor: '#bfc0c1',
    height: 70,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#C2092A',
  },
  itemTextBlock: {
    color: '#79797a',
    fontSize: 15,
    fontWeight: '100',
    paddingLeft: 15,
    width: '80%',
  }
});