import React, { Component } from 'react'
import {
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
  } from 'react-native';
  import { Icon } from 'expo';

export default class Leccion extends Component {
  
  render() {

    const { idleccion, nombre, imagen, click, habilitada } = this.props;



      if(habilitada==1){
              return (
                <TouchableHighlight 
                style={styles.item}
                underlayColor = '#d8d8d8' 
                onPress={click}
                >
                    <View style={styles.contenido}>
                          <Image
                            style={{width: 50, height: 50,borderRadius:25}}
                            source={{uri: imagen}}
                          />     
                          <Text style={styles.itemText}>{idleccion}- {nombre} </Text> 
                    </View>
                </TouchableHighlight>
            )
      }else{
        return (
          <TouchableHighlight 
          style={styles.itemBlock}
          underlayColor = '#d8d8d8' 
          >
              <View style={styles.contenido}>
                    <Image
                      style={{width: 50, height: 50,borderRadius:25}}
                      source={{uri: imagen}}
                    /> 
                    <View style={{flex:1}}>
                        <Text style={styles.itemTextBlock}>
                        <Icon.Ionicons
                              name="ios-close-circle-outline"
                              size={26}
                              style={{}}
                              color={'#79797a'}
                            />   {nombre}
                        </Text> 
                      </View>    
              </View>
                
          </TouchableHighlight>
      )
      }
   
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