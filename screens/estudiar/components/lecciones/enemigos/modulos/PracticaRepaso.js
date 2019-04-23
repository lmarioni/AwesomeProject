import RF from "react-native-responsive-fontsize";
import { Text, View, Animated, StyleSheet } from 'react-native';
import React, { PureComponent, Component } from 'react';
import { Card, Icon, Button } from 'react-native-elements';

export default class PracticaRepaso extends Component {
  constructor(props) {
    super(props)
    this.state.titulo = "Repasemos"
  }
  state = {
    fadeAnim: new Animated.Value(1),  // Initial value for opacity: 0,
    step: 1
  }
  static navigationOptions = {
    title: 'Práctica de repaso',
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
        return (
          <React.Fragment>
            <Text style={styles.paragraph}>Respondé las preguntas para saber cuánto aprendiste de la lección. Recordá que si salís de la evaluación antes de terminar todas las preguntas, tu progreso se guardará y lo podras seguir luego.</Text>
          </React.Fragment>
        )
      case 2:
        return (
          <React.Fragment>
            <Text style={styles.textoPreguntas}>¿Qué hay adentro del puntito?</Text>{"\n"}{"\n"}
            <Text style={styles.paragraph}>Lo que sé y nada más. (Por ejemplo, "sé cocinar", "sé lo que debería hacer mi jefe")</Text>{"\n"}{"\n"}
            <Text style={styles.textoRespuestas}>Lo que sé y también lo que sé que no sé. (Por ejemplo, “sé cocinar, "sé lo que debería hacer mi jefe", "sé que no sé hablar chino", "sé que no sé de programación informática")</Text>
            <Text style={styles.textoRespuestas}>Todo lo que no sé que no sé. (Por ejemplo, "lo desconocido")</Text>
          </React.Fragment>
        )
      case 3:
        return (
          <React.Fragment>
            <Text style={styles.paragraph}>Descubriste lo que, dentro del coaching ontológico llamamos Caja de creencias.</Text>
          </React.Fragment>
        )
      case 4:
        return (
          <React.Fragment>
            <Text style={styles.paragraph}>Te observaste a ti mismo desde tu interior.</Text>
          </React.Fragment>
        )
      case 5:
        return (
          <React.Fragment>
            <Text style={styles.paragraph}>Tomaste consciencia entre tu aprender y saber.</Text>
          </React.Fragment>
        )
      case 6:
        return (
          <React.Fragment>
            <Text style={styles.paragraph}>Identificaste tus enemigos del aprendizaje.</Text>
          </React.Fragment>
        )
      case 7:
        return (
          <React.Fragment>
            <Text style={styles.paragraph}>Dentro de 6 días, tendrás habilitada la siguiente lección. El tiempo que tendrás a partir de ahora, te recomendamos tomarlo para aplicar lo aprendido en esta lección en tu Realidad ideal para lo cual te inscribiste en esta carrera.</Text>
            <Text style={styles.paragraph}>¿Te sirvió esta lección para acercarte a tu Realidad Ideal?</Text>
          </React.Fragment>
        )
    }
  }
  prevStep = () => {
    this.setState({ step: this.state.step - 1 })
  }
  nextStep = () => {
    this.setState({ step: this.state.step + 1 })
  }
  _onPress = () => {
    switch (this.state.step) {
      case 1:
        this.setState({
          titulo: "Bienvenido"
        });
        break;
      case 2:
        this.setState({
          titulo: "Pregunta N° 1"
        });
        break;
      case 3:
        this.setState({
          titulo: "Pregunta N° 2"
        });
        break;
      case 4:
        this.setState({
          titulo: "Pregunta N° 3"
        });
        break;
      case 5:
        this.setState({
          titulo: "Pregunta N° 4"
        });
        break;
      case 6:
        this.setState({
          titulo: "Pregunta N° 5"
        });
        break;
      case 7:
        this.setState({
          titulo: "Pregunta N° 6"
        });
        break;
      case 8:
        this.setState({
          titulo: "Pregunta N° 7"
        });
        break;
      case 9:
        this.setState({
          titulo: "Pregunta N° 8"
        });
        break;
      case 10:
        this.setState({
          titulo: "Pregunta N° 9"
        });
        break;
      case 11:
        this.setState({
          titulo: "Pregunta N° 10"
        });
        break;
      case 12:
        this.setState({
          titulo: "Felicitaciones"
        });
        break;
    }
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
        ).start()
      }, 1000)                       // Starts the animation
  }
  render() {
    let { fadeAnim } = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 40, backgroundColor: 'white' }}>
        <Card title={this.state.titulo} style={{ border: 2 }}>
          <Animated.Text style={{ ...this.props.style, opacity: fadeAnim, margin: 24, fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: '#34495e' }}>
            {/*Ya casi has finalizado esta lección! Pero antes, repasemos un poco lo aprendido:*/}
            {this.mostrarTarjeta()}
          </Animated.Text>
          <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Button icon={<Icon type='font-awesome' name='arrow-circle-left' color='#ffffff' />} backgroundColor='#0081C4' buttonStyle={{ borderRadius: 5, marginLeft: 5, marginRight: 5, marginBottom: 0, width: 150 }} title=' Anterior' onPress={this._onPress} />
            <Button icon={<Icon type='font-awesome' name='arrow-circle-right' color='#ffffff' />} backgroundColor='#0081C4' buttonStyle={{ borderRadius: 5, marginLeft: 5, marginRight: 5, marginBottom: 0, width: 150 }} title=' Siguiente' onPress={this._onPress} />
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
    textAlign: 'left',
    fontWeight: '100',
    backgroundColor: '#fff',
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    borderColor: '#d8d8d8',
    borderRadius: 5,
    borderWidth: 6,
  },
  textoPreguntas: {
    fontSize: RF(3),
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    width: "100%",
    marginTop: 2,
    marginBottom: 2,
    padding: 10,
  },
  textoRespuestas: {
    fontSize: RF(2.5),
    textAlign: 'left',
    fontWeight: '200',
    backgroundColor: 'transparent',
    width: "100%",
    marginTop: 2,
    marginBottom: 2,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
});