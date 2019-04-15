import { Dimensions, ActivityIndicator, WebView } from 'react-native';
import React, { Component } from 'react';
export default class Video1 extends Component {
  static navigationOptions = {
    title: 'Cambios de Paradigmas',
    headerStyle: {
      backgroundColor: '#C2092A',
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
    let uri = 'https://player.vimeo.com/video/319907333';
    return (
      <WebView
        renderLoading={this.renderLoadingView}
        source={{ uri }}
        startInLoadingState={true}
      />
    );
  }
}