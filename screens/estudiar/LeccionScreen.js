import React, { Component } from 'react';
import { Text,View, StyleSheet,WebView } from 'react-native';
import Carousel from "react-native-carousel-control";

import * as Progress from 'react-native-progress';
import { ScrollView } from 'react-native-gesture-handler';

export default class LeccionScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('leccionNombre', 'Estudiar'),
    };
  };

  constructor(){
    super();
    this.state = {
      cantSliders: 6,
      currentPage: 0, //para setear el numero de slide
      porciento: 0,
    }
  }

  componentDidMount(){
    this.setState({
      porciento: ((this.state.currentPage+1)*1)/this.state.cantSliders,
    });
  }

    render () {
      const { navigation } = this.props;

        return (
          <View style={{flex:1}}>  
            <View style={{height:'95%'}}>  
                <Carousel 
                id = {1}
                onPageChange={ (pagina) => {
                  calc = (((pagina+1)*1)/this.state.cantSliders);
                  this.setState({porciento: calc,currentPage: pagina,});
                  console.log(this.state.porciento);
                } 
                }
                swipeThreshold={0.2}
                currentPage={this.state.currentPage} 
                containerStyle={ styles.container } 
                pageStyle={ styles.page }>
                  
                  <View style={styles.slide}>
                      <Text style={styles.title}> Soy un contenido </Text>
                  </View>
                   
                  <View style={styles.slide}>
                      <Text style={styles.title}> Soy un contenido  2 </Text>
                  </View>

                  <View style={styles.slide}>
                      <Text style={styles.title}> Soy un contenido  3 </Text>
                  </View>
                  
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

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignSelf: "stretch",
      backgroundColor: '#1E90FF',
  },
  page: {
      flex: 1,
      backgroundColor: 'white',
      borderRadius: 10,
      marginTop: 10,
  }
});