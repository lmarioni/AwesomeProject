
import RF from "react-native-responsive-fontsize";
import { ScrollView, StyleSheet, FlatList, View, Image, Text, ImageBackground, Dimensions, ActivityIndicator, WebView} from 'react-native';
import React, {Component} from 'react';
import { Video } from 'expo';
  const fondo = 'https://www.axonplataforma.com.ar/aca/f/cursoc/fondo.png';
  const imagen_inicio = "https://www.axonplataforma.com.ar/images/5c1d4494037c3.png";
  const resizeMode = 'center';
  const { width } = Dimensions.get('window');
  export default class VideoExplicativo extends Component {
    static navigationOptions = {
        title: 'Video Explicativo',
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
    let uri = 'https://player.vimeo.com/video/304214259';
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
    justifyContent: "center",
    alignSelf: "stretch",
    backgroundColor: 'transparent',
    width: null,
    height: null,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  contentContainer: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingLeft: 2,
    paddingRight: 2
  },
  title: {
    fontSize: RF(4.3),
    textAlign: 'center',
    marginBottom: 20,
  },
  subTittle: {
    fontSize: RF(3),
    textAlign: 'center',
    fontWeight: "bold"
  },
  subTittleColor: {
    paddingTop: 10,
    fontSize: RF(4),
    textAlign: 'center',
    color: "#005D82",
    fontWeight: "bold",
    backgroundColor: 'transparent'
  },
  estiloBR: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  texto: {
    fontSize: RF(2.8),
    textAlign: 'justify',
    fontWeight: '100',
    backgroundColor: '#fff',
    width: "100%",
    marginTop: 10,
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 10,
    borderRadius: 0,
    padding: 10,
    borderWidth: 1,
    borderColor: '#d8d8d8',
  }
});