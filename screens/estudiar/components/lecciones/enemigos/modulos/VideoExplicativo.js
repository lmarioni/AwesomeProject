
import { StyleSheet, Dimensions, ActivityIndicator, WebView } from 'react-native';
import React, { Component } from 'react';
export default class VideoExplicativo extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: "Vídeo Explicativo",
    headerStyle: {
      backgroundColor: '#0081C4',
      borderBottomColor: 'white',
      borderBottomWidth: 3,
    },
    headerTitleStyle: {
      color: 'white'
    },
    backButton: {
      color: "white"
    },
    headerTintColor: "white"
  };
  renderLoadingView() {
    const dimensions = Dimensions.get('window');
    const marginTop = dimensions.height / 2 - 75;

    return (
      <ActivityIndicator
        animating={true}
        color='#0076BE'
        size='large'
        hidesWhenStopped={true}
        style={{ marginTop }}
      />
    );
  }
  render() {
    let uri = 'https://player.vimeo.com/video/304214259';
    return (
      <WebView
        renderLoading={this.renderLoadingView}
        source={{ uri }}
        startInLoadingState={true}
      />
    );
  }
}