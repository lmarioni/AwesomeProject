import React, { Component } from 'react'
import {ScrollView, StyleSheet, TouchableHighlight, View, Text, Image, Dimensions} from 'react-native';
import { Icon } from 'expo';

export default class LeccionScreen extends Component {
  static navigationOptions = {
    title: 'Enemigos del Aprendizaje',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <React.Fragment>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <TouchableHighlight
            style={styles.item}
            underlayColor='#d8d8d8'
            onPress={() => navigate('Teorico1Screen', {title: 'Instrucción'})}
          >
            <View style={styles.contenido}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 25 }}
                source={{ uri: "https://picsum.photos/200/300/?image=1082" }}
              />
              <Text style={styles.itemText}>1.1- Introducción</Text>
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
                source={{ uri: "https://picsum.photos/200/300/?image=1077" }}
              />
              <Text style={styles.itemText}>1.2 ¿Qué es el Aprendizaje?</Text>
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
                source={{ uri: "https://picsum.photos/200/300/?image=1075" }}
              />
              <Text style={styles.itemText}>1.3.- Re-aprendiendo a relacionarnos</Text>
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
                source={{ uri: "https://picsum.photos/200/300/?image=1073" }}
              />
              <Text style={styles.itemText}>1.4.- Enemigos del Aprendizaje</Text>
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
                source={{ uri: "https://picsum.photos/200/300/?image=1068" }}
              />
              <Text style={styles.itemText}>1.5.- Descubriendo oportunidades</Text>
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
                source={{ uri: "https://picsum.photos/200/300/?image=1063" }}
              />
              <Text style={styles.itemText}>1.6.- La propia imagen</Text>
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
                source={{ uri: "https://picsum.photos/200/300/?image=1054" }}
              />
              <Text style={styles.itemText}>1.7.- Conociendo nuestra capacidad</Text>
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
                source={{ uri: "https://picsum.photos/200/300/?image=1048" }}
              />
              <Text style={styles.itemText}>1.8.- Principales enemigos del aprendizaje</Text>
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
                source={{ uri: "https://picsum.photos/200/300/?image=1044" }}
              />
              <Text style={styles.itemText}>1.9.- Reflexión sobre el tiempo</Text>
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
                source={{ uri: "https://picsum.photos/200/300/?image=1040" }}
              />
              <Text style={styles.itemText}>1.10.- Práctica</Text>
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
    borderColor: '#d8d8d8',
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
    borderColor: '#d8d8d8',
  },
  itemTextBlock: {
    color: '#79797a',
    fontSize: 15,
    fontWeight: '100',
    paddingLeft: 15,
    width: '80%',
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
    borderColor: '#d8d8d8',
  }
});