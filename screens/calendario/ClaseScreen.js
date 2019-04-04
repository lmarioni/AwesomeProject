import React, {Component} from 'react';
import {WebView, View, ActivityIndicator, StyleSheet, Text} from 'react-native';

class ClaseScreen extends Component {

    constructor(){
        super();
        this.state = {
            loading: true
        }
    }

    static navigationOptions = {
        title: 'Clase',
      };

  render() {
        return (
            <View style={{height:'100%'}}>
                {this.state.loading ?  <View style={styles.container}><ActivityIndicator size="small" color="gray" /></View>: null }
                <WebView
                source={{uri: 'http://www.axonplataforma.com.ar/vimeo.php?id=MTIzMTE='}}
                style={{marginTop: 0}}
                onLoad={() => this.setState({loading:false})}
            />  
            </View>
            
        );  
      
  
  }
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      marginTop: 20
    }
  })
  
export default ClaseScreen;