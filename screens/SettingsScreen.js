import React from 'react';
import { Button, Text, View, StyleSheet,  ActivityIndicator, AsyncStorage, StatusBar } from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends React.Component {

  constructor() {
    super();
    this._getVar();
    this.state = {
      nombre: null,
      apellido: null,
      animating:true,
    }
  }

  static navigationOptions = {
    title: 'Perfil',
  };

  

  render() {
    return (
      <View>
        <Text style={{fontSize:40,textAlign:'center',}}>
          {this.state.nombre} {this.state.apellido}
        </Text>
      </View>
    );
  }

  _getVar = async () => {
    const userId = await AsyncStorage.getItem('userId');
    
    await fetch('http://api.axontraining.com.ar/usuario/'+userId)
        .then((response) => response.json())
        .then((responseJson) => {
           // console.log(responseJson.apellido);
           this.setState({
             animating: false,
             nombre: responseJson.nombre,
             apellido: responseJson.apellido,
           })
        });

  };
}
