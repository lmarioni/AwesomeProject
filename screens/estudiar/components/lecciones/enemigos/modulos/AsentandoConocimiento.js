import RF from "react-native-responsive-fontsize";
import { Text, View, Animated, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { Card, Icon, Button } from 'react-native-elements';
import RadioGroup,{Radio} from "react-native-radio-input";

export default class AsentandoConocimiento extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    fadeAnim: new Animated.Value(1),  // Initial value for opacity: 0,
    step: 1
  }
  static navigationOptions = {
    title: 'Asentando el Conocimiento',
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
  mostrarTarjeta = () => {
    switch (this.state.step) {
      case 1:
        return(
          <React.Fragment>
            <Text style={styles.paragraph}>¡Ya casi has finalizado esta lección! Pero antes, repasemos un poco lo aprendido:</Text>
          </React.Fragment>
        )
      case 2:
        return(
          <React.Fragment>
            <Text style={styles.paragraph}>Aprendiste que los Enemigos del Aprendizaje son nuestros obstáculos internos.</Text>
          </React.Fragment>
        )
      case 3:
        return(
          <React.Fragment>
            <Text style={styles.paragraph}>Descubriste lo que, dentro del coaching ontológico llamamos Caja de creencias.</Text>
          </React.Fragment>
        )
      case 4:
        return(
          <React.Fragment>
            <Text style={styles.paragraph}>Te observaste a ti mismo desde tu interior.</Text>
          </React.Fragment>
        )
      case 5:
        return(
          <React.Fragment>
            <Text style={styles.paragraph}>Tomaste consciencia entre tu aprender y saber.</Text>
          </React.Fragment>
        )
      case 6:
        return(
          <React.Fragment>
            <Text style={styles.paragraph}>Identificaste tus enemigos del aprendizaje.</Text>
          </React.Fragment>
        )
      case 7:
        return(
          <React.Fragment>
            <Text style={styles.paragraph}>Dentro de 6 días, tendrás habilitada la siguiente lección. El tiempo que tendrás a partir de ahora, te recomendamos tomarlo para aplicar lo aprendido en esta lección en tu Realidad ideal para lo cual te inscribiste en esta carrera.</Text>
            <Text style={styles.paragraph}>¿Te sirvió esta lección para acercarte a tu Realidad Ideal?</Text>
          </React.Fragment>
        )
    }
  }
  prevStep = () => {
    this.setState({step: this.state.step -1})
  }
  nextStep = () => {
    this.setState({step: this.state.step + 1})
  }
  _onPress = () => {
    console.log("Presionado");
    // Animate the update
    Animated.spring(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 0,                   // Animate to opacity: 1 (opaque)
        duration: 1000,              // Make it take a while
      }
    ).start(); 
    setTimeout(
      () => {
        this.nextStep();
    Animated.spring(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 1000,              // Make it take a while
      }
    ).start()},1000)                       // Starts the animation
  }
  render() {
    let { fadeAnim } = this.state;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 40, backgroundColor: 'white'}}>
        <Card title="Axon Training" style={{border: 2}}>
          <Animated.Text style={{...this.props.style, opacity: fadeAnim,margin: 24, fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: '#34495e'}}>
            {/*Ya casi has finalizado esta lección! Pero antes, repasemos un poco lo aprendido:*/}
            {this.mostrarTarjeta()}
          </Animated.Text>
          <View style={{flex: 2, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Button icon={<Icon type='font-awesome' name='arrow-circle-left' color='#ffffff' />} backgroundColor='#0081C4' buttonStyle={{borderRadius: 5, marginLeft: 5, marginRight: 5, marginBottom: 0, width: 150 }} title=' Anterior' onPress={this._onPress} />
            <Button icon={<Icon type='font-awesome' name='arrow-circle-right' color='#ffffff' />} backgroundColor='#0081C4' buttonStyle={{borderRadius: 5, marginLeft: 5, marginRight: 5, marginBottom: 0, width: 150 }} title=' Siguiente' onPress={this._onPress} />
          </View>
        </Card>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: "flex-start",
        alignSelf: "stretch",
        backgroundColor: 'transparent',
        width: null,
        height: null,
    },
    contentContainer: {
        backgroundColor: '#fff',
        width: "100%",
        height: "100%"
    },
  paragraph: {
    fontSize: RF(2.8),
        textAlign: 'justify',
        fontWeight: '100',
        backgroundColor: '#fff',
        width: "100%",
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 0,
        padding: 10,
        borderWidth: 1,
        borderColor: '#d8d8d8',
  }
});