import React from 'react';
import { Text, View, Image, StyleSheet, AsyncStorage, Button } from 'react-native';
import Placeholder from 'rn-placeholder';
// import console = require('console');
// import console = require('console');

export default class SettingsScreen extends React.Component {

  constructor() {
    super();
    // this._getVar();
    this.state = {
      nombre: null,
      apellido: null,
      avatar: null,
      animating:false,
    }
  }

  componentDidMount(){
    this._getVar();
  }

  static navigationOptions = {
    title: 'Perfil',
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
    }
  };

  

  render() {
    if(this.state.animating == false){
      return (
        <View>
          <Placeholder.Box
            height={225}
            width="100%"
            radius={5}
            color="#1E90FF"
            animate="fade"
          />
          <Button title="Cerrar sesion" onPress={this._signOutAsync} />    

      </View>
    );
    }else{
      return (
        <View>
        <View style={styles.header}>
          <View style={styles.headerContent}>
              <Image style={styles.avatar}
                source={{uri: this.state.avatar}}/>

              <Text style={styles.name}>
                {this.state.nombre}
              </Text>
          </View>
        </View>
  
          <View style={styles.tarjetaPanel}>
            <View style={styles.card}>
            <Text style={styles.cardTittle}>Progreso de la carrera</Text>  
            </View>
          </View>
          <Button title="Cerrar sesion" onPress={this._signOutAsync} />    
    </View>
    );
    }
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  _getVar = async () => {
    const userId = await AsyncStorage.getItem('userId');
    
    await fetch('https://api.axontraining.com/usuarios/'+userId)
        .then((response) => response.json())
        .then((responseJson) => {

           this.setState({
             animating: true,
             nombre: responseJson.name,
             avatar: 'http://www.axonplataforma.com.ar/images/avatar/'+responseJson.avatar,
           })
        });

  };
}


const styles = StyleSheet.create({
  header:{
    backgroundColor: "#1E90FF",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  body:{
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  textInfo:{
    fontSize:18,
    marginTop:20,
    color: "#696969",
  },
  cardTittle:{
    color:"#808080",
    fontSize:22,
    marginBottom:5,
  },
  card:{
    backgroundColor: "#efefef",
    borderRadius:10,
    padding:10,
    height:100,
    marginTop:10,
  },
  tarjetaPanel: {
    padding: 10,
  }
});
 