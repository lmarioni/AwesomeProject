import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import { Text,View, StyleSheet,WebView } from 'react-native';
import Carousel from "react-native-carousel-control";
import T1 from "./components/lecciones/enemigos/tarjetas/T1";
import T2 from "./components/lecciones/enemigos/tarjetas/T2";
import T3 from "./components/lecciones/enemigos/tarjetas/T3";
// import T4 from "./components/lecciones/enemigos/tarjetas/T4";
import * as Progress from 'react-native-progress';
import { ScrollView } from 'react-native-gesture-handler';
import { Platform } from 'expo-core';

export default class LeccionScreen extends Component {

static navigationOptions = (
  Platform.OS === 'ios' ?  
  navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('leccionNombre', 'Estudiar'),
        };
      } :
      navigationOptions = {
            header: null,
            }
) 

  constructor(){
    super();
    this.state = {
      cantSliders: 6,
      currentPage: 0, //para setear el numero de slide
      porciento: 0,
    }
  }

  componentDidMount(){

console.log("alto: "+Dimensions.get('window').height);
console.log("Ancho: "+Dimensions.get('window').width);




    this.setState({
      porciento: ((this.state.currentPage+1)*1)/this.state.cantSliders,
    });
  }

    render () {
      const { navigation } = this.props;

        return (
          <View style={{flex:1}}>  
         
            <View style={{height:'95%'}} >  
                <Carousel 
                id = {1}
                onPageChange={ (pagina) => {
                  calc = (((pagina+1)*1)/this.state.cantSliders);
                  this.setState({porciento: calc,currentPage: pagina,});
                  // console.log(this.state.porciento);
                } 
                }
                swipeThreshold={0.2}
                currentPage={this.state.currentPage} 
                containerStyle={ styles.container } 
                pageStyle={ styles.page }>
                  
                    <T1 />
                 
                    <T2 />

                    <T3 />
                  
                  <View style={styles.slide}>
                      <Text style={styles.title}> Soy un contenido 4 </Text>
                  </View>

                  <View style={styles.slide}>
                      <Text style={styles.title}> Soy un contenido 5 </Text>
                  </View>

                  <View style={styles.slide}>
                      <Text style={styles.title}> Soy un contenido 6 </Text>
                  </View>

                </Carousel>
            </View>
            <View>
              <Progress.Bar 
                progress={this.state.porciento} 
                width={null}
                borderRadius={0}
                />
            </View>
          </View>
        );
    }
}
let padding = 0;
if(Platform.OS === 'android'){
   padding = '5%';
}else{
   padding = 0;
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignSelf: "stretch",
      backgroundColor: '#1E90FF',
      paddingTop: padding
  },
  page: {
      flex: 1,
      backgroundColor: 'white',
      borderRadius: 10,
      marginTop: 10,
      paddingLeft: 15,
      paddingRight: 15,
  }
});