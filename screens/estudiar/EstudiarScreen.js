import React from 'react';
import {
  ScrollView,
  StyleSheet,
  FlatList,
  View,
  Text,
} from 'react-native';

import LoadingEstudiar from './components/LoadingEstudiar';
import Leccion from './components/Leccion';
// import console = require('console');
export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this._getLecciones();
    this.state = {
      data: null,
      animating: false,
    }
  }
  componentDidMount(){
    fetch('http://api.axontraining.com/lecciones')
    .then((response) => response.json())
    .then((responseJson) => {
      // this.setTimeout(() => {
        // console.log(responseJson);
        this.setState({
          data: responseJson,
          animating: true
        })
      // }, 5);
    })

  }

  static navigationOptions = {
    title: 'Estudiar',
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
    const {navigate} = this.props.navigation;
    if(this.state.animating == false){
      return ( 
        // <Text>Hola</Text>
          <LoadingEstudiar />
    );
    }else{
        return (
          <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
              <View style={styles.welcomeContainer}>
                <FlatList
                data={this.state.data}
                renderItem={({item}) => 
                <Leccion 
                  idleccion={item.id} 
                  nombre={item.nombre}
                  imagen={item.imagen}
                  habilitada={item.habilitada}
                  click = {() => this.props.navigation.navigate('Leccion',{
                      leccionId: item.id,
                      leccionNombre: item.nombre,
                    })} />
                
              }
                keyExtractor={({id}, index) => id}
              />
              </View>
            </ScrollView>
          </View>
        );
    }
  }

  _getLecciones(){

  }

}


 // <TouchableHighlight 
              // style={styles.item}
              // underlayColor = '#d8d8d8' 
              // onPress={() => this.props.navigation.navigate('Leccion',{
              //   leccionId: item.id,
              // })}
              // >
              //     <View style={styles.contenido}>
              //           <Image
              //             style={{width: 50, height: 50,borderRadius:25}}
              //             source={{uri: item.imagen}}
              //           />     
              //           <Text style={styles.itemText}>{item.id}- {item.nombre}</Text> 
              //     </View>
                    
              // </TouchableHighlight>  

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
    fontSize: 16,
    fontWeight: "100",
    paddingLeft: 15,
    
  },
  contenido: {
    flex:1,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  }
});
