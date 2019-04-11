import RF from "react-native-responsive-fontsize";
import { ScrollView, StyleSheet, View, Text, Linking, Image, TouchableHighlight, Dimensions, ActivityIndicator, WebView} from 'react-native';
import React, {Component} from 'react';
import { Constants } from 'expo';
export default class Lectura extends Component{
    static navigationOptions = {
        title: 'Aprendizaje ontológico',
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
    renderLoadingView() {
        const dimensions = Dimensions.get('window');
        const marginTop = dimensions.height/2 - 75;
    
        return (
          <ActivityIndicator
            animating = {true}
            color = '#0076BE'
            size = 'large'
            hidesWhenStopped={true}
            style={{marginTop}}
          />
        );
      }
      render() {
        let uri = 'https://axont-contenidos.s3.us-east-2.amazonaws.com/pdf/5c890a872e70f.pdf';
    
        if (/\.pdf$/.test(uri)) {
          uri = `https://drive.google.com/viewerng/viewer?embedded=true&url=${uri}`;
        }
    
        return (
          <WebView
            renderLoading={this.renderLoadingView}
            source={{uri}}
            startInLoadingState={true}
          />
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
      },
    });
    