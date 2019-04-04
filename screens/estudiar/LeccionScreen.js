import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
} from 'react-native';
import { Icon } from 'expo';

export default class LeccionScreen extends Component {
  render() {
    return (
      <React.Fragment>
      <TouchableHighlight 
      style={styles.item}
      underlayColor = '#d8d8d8' 
      onPress= {() => this.props.navigation.navigate('Teorico1Screen',{
        // leccionId: item.id,
        // leccionNombre: item.nombre,
      })}
      >
          <View style={styles.contenido}>
                {/* <Image
                  style={{width: 50, height: 50,borderRadius:25}}
                  source={{uri: imagen}}
                />      */}
                <Text style={styles.itemText}>1 Contenido teorico 1 </Text> 
          </View>
      </TouchableHighlight>

      <TouchableHighlight 
      style={styles.item}
      underlayColor = '#d8d8d8' 
      onPress= {() => this.props.navigation.navigate('Teorico2Screen',{
        // leccionId: item.id,
        // leccionNombre: item.nombre,
      })}
      >
          <View style={styles.contenido}>
                {/* <Image
                  style={{width: 50, height: 50,borderRadius:25}}
                  source={{uri: imagen}}
                />      */}
                <Text style={styles.itemText}>1 Contenido teorico 2 </Text> 
          </View>
      </TouchableHighlight>

      <TouchableHighlight 
      style={styles.item}
      underlayColor = '#d8d8d8' 
      onPress= {() => this.props.navigation.navigate('Teorico3Screen',{
        // leccionId: item.id,
        // leccionNombre: item.nombre,
      })}
      >
          <View style={styles.contenido}>
                {/* <Image
                  style={{width: 50, height: 50,borderRadius:25}}
                  source={{uri: imagen}}
                />      */}
                <Text style={styles.itemText}>1 Contenido teorico 3 </Text> 
          </View>
      </TouchableHighlight>

      </React.Fragment>
    )
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#efefef',
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
    },
    contenido: {
      flex:1,
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
  });