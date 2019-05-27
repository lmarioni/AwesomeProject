import RF from "react-native-responsive-fontsize";
import {
  Text,
  View,
  Animated,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  AsyncStorage,
  TouchableOpacity,
  Alert
} from "react-native";
import React, { Component } from "react";
import { Card, Icon, Button } from "react-native-elements";
import RadioGroup, { Radio } from "react-native-radio-input";
import Modal from "react-native-modalbox";
import axios from "axios";

export default class PracticaRepaso extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    fadeAnim: new Animated.Value(1), // Initial value for opacity: 0,
    step: 1,
    indexCarta: null,
    titulo: "",
    dataSource: null,
    evaluaciones: [],
    radioRes: "",
    isOpen: false,
    isDisabled: false,
    swipeToClose: true,
    sliderValue: 0.3,
    animating: true,
    bienvenido: false
  };
  async componentDidMount() {
    const sesion = await AsyncStorage.getItem("sesion");
    this.setState({
      nombreUsuario: JSON.parse(sesion).nombre
    });
    axios
      .get("https://api.axontraining.com/lecciones/evaluaciones/17")
      .then(res => {
        this.setState({
          dataSource: res.data.preguntas,
          eleccion: 1
        });
      });
    axios
      .get(
        "https://api.axontraining.com/alumnos/" +
          JSON.parse(sesion).id +
          "/evaluaciones/17/estado"
      )
      .then(res => {
        if (res.data.length) {
          this.setState({
            animating: false
          });

          if (res.data.length - 1 === 9) {
            axios
              .get(
                "https://api.axontraining.com/alumnos/" +
                  JSON.parse(sesion).id +
                  "/evaluaciones/17/nota"
              )
              .then(res => {
                this.setState({
                  calificacion: res.data.nota
                });
                this.refs.modal3.open();
              });
          } else {
            this.setState({
              indexCarta: res.data.length,
              titulo: res.data.length + 1
            });
          }
        } else {
          this.setState({
            bienvenido: true,
            animating: false
          });
        }
      });
  }
  componentDidUpdate(prevProps, prevState) {
    //console.log("ENTRO " + this.state.eleccion);
  }
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.5)"
        }}
      />
    );
  };
  renderItem = data => (
    <TouchableOpacity style={styles.list}>
      <Text style={styles.lightText}>{data.item.id}</Text>
      <Text style={styles.lightText}>{data.item.numero}</Text>
      <Text style={styles.lightText}>{data.item.descripcion}</Text>
      {data.item.respuestas.map(evaluacion => (
        <Text key={evaluacion.id} style={styles.lightText}>
          {evaluacion.opcionAbierta}
        </Text>
      ))}
    </TouchableOpacity>
  );
  static navigationOptions = {
    title: "Práctica de repaso",
    headerStyle: {
      backgroundColor: "#C2092A",
      borderBottomColor: "white",
      borderBottomWidth: 3
    },
    headerTitleStyle: {
      color: "white"
    },
    backButton: {
      color: "white"
    },
    headerTintColor: "white"
  };
  prevStep = () => {
    this.setState({ step: this.state.step - 1 });
  };
  nextStep = () => {
    this.setState({ step: this.state.step + 1 });
  };
  _onPress = async () => {
    if (this.state.radioRes === "") {
      Alert.alert(
        "Debes Seleccionar una Respuesta",
        "",
        [
          {
            text: "Cancelar",
            style: "cancel"
          },
          { text: "Aceptar" }
        ],
        { cancelable: false }
      );
    } else if (this.state.indexCarta <= this.state.dataSource.length - 1) {
      await this.setState({
        evaluaciones: [
          ...this.state.evaluaciones,
          {
            id: this.state.dataSource[this.state.indexCarta].id,
            respuesta: this.state.radioRes
          }
        ]
      });
      if (this.state.indexCarta < this.state.dataSource.length - 1) {
        this.setState({
          indexCarta: this.state.indexCarta + 1,
          radioRes: ""
        });
      }
      // guarda el estado de la evaluacion
      /* const sesion = await AsyncStorage.getItem("sesion");
      axios
        .post(
          "https://api.axontraining.com/alumnos/" +
            JSON.parse(sesion).id +
            "/evaluaciones/17/estado",
          {
            pregunta: {
              id: this.state.dataSource[this.state.indexCarta].id,
              numero: this.state.dataSource[this.state.indexCarta].numero,
              respuesta: this.state.radioRes
            }
          }
        )
        .then(res => {
          if (this.state.indexCarta === 9) {
            axios
              .post(
                "https://api.axontraining.com/alumnos/" +
                  JSON.parse(sesion).id +
                  "/evaluaciones/17/nota",
                {
                  //idPregunta: this.state.dataSource[this.state.indexCarta].id,
                  respuestas: this.state.evaluaciones
                }
              )
              .then(res => {
                console.log(res.data);
                this.setState({
                  calificacion: res.data
                });
                this.refs.modal3.open();
              });
          }
        }); */
      // Animate the update
      Animated.spring(
        // Animate over time
        this.state.fadeAnim, // The animated value to drive
        {
          toValue: 0, // Animate to opacity: 1 (opaque)
          duration: 1000 // Make it take a while
        }
      ).start();
      setTimeout(() => {
        //this.nextStep();
        Animated.spring(
          // Animate over time
          this.state.fadeAnim, // The animated value to drive
          {
            toValue: 1, // Animate to opacity: 1 (opaque)
            duration: 1000 // Make it take a while
          }
        ).start();
      }, 1000); // Starts the animation
    }
  };
  getChecked = value => {
    this.setState({
      radioRes: value
    });
  };
  render() {
    let { fadeAnim } = this.state;
    return (
      <React.Fragment>
        <ScrollView>
          <View style={styles.container}>
            {this.state.dataSource !== null ? (
              this.state.indexCarta !== null ? (
                <React.Fragment>
                  <Card
                    title={
                      "Pregunta N°" +
                      this.state.dataSource[this.state.indexCarta].numero
                    }
                    style={{
                      flex: 1,
                      flexDirection: "column",
                      justifyContent: "space-between"
                    }}
                  >
                    <Animated.View>
                      <Text style={styles.textoPreguntas}>
                        {
                          this.state.dataSource[this.state.indexCarta]
                            .descripcion
                        }
                      </Text>
                      <RadioGroup
                        getChecked={this.getChecked}
                        RadioStyle={{
                          marginRight: 25
                        }}
                        labelStyle={{ fontSize: 14, padding: 5 }}
                      >
                        {this.state.dataSource[
                          this.state.indexCarta
                        ].respuestas.map((respuesta, key) => (
                          <Radio
                            key={key}
                            iconName={"lens"}
                            label={respuesta.opcionAbierta}
                            value={JSON.stringify({
                              id: respuesta.id,
                              opcionCorrecta: respuesta.opcionCorrecta
                            })}
                          />
                        ))}
                      </RadioGroup>
                    </Animated.View>
                  </Card>
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                      marginTop: "10%"
                    }}
                  >
                    <Button
                      icon={
                        <Icon
                          type="font-awesome"
                          name="arrow-circle-right"
                          color="#ffffff"
                        />
                      }
                      backgroundColor="#0081C4"
                      buttonStyle={{
                        borderRadius: 5,
                        marginLeft: 5,
                        marginRight: 5,
                        marginBottom: 0,
                        width: 300
                      }}
                      title=" Siguiente"
                      onPress={this._onPress}
                    />
                  </View>
                </React.Fragment>
              ) : null
            ) : null}
            {this.state.bienvenido && (
              <React.Fragment>
                <Card
                  title={"Bienvenido " + this.state.nombreUsuario}
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "space-between"
                  }}
                >
                  <Animated.View>
                    <Text style={styles.paragraph}>
                      {
                        "Por favór, respondé las siguientes preguntas. Recordá que si salís de la evaluación antes de terminar todas las preguntas, tu progreso se guardará y lo podras seguir luego."
                      }
                    </Text>
                  </Animated.View>
                </Card>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    marginTop: "10%"
                  }}
                >
                  <Button
                    icon={
                      <Icon
                        type="font-awesome"
                        name="arrow-circle-right"
                        color="#ffffff"
                      />
                    }
                    backgroundColor="#0081C4"
                    buttonStyle={{
                      borderRadius: 5,
                      marginLeft: 5,
                      marginRight: 5,
                      marginBottom: 0,
                      width: 300
                    }}
                    title=" Empezar"
                    onPress={() =>
                      this.setState({ indexCarta: 0, bienvenido: false })
                    }
                  />
                </View>
              </React.Fragment>
            )}
          </View>
          <ActivityIndicator
            animating={this.state.animating}
            color="#bc2b78"
            size="large"
            style={styles.spinner}
          />
        </ScrollView>

        <Modal
          style={[styles.modal, styles.modal3]}
          onClosed={() => this.props.navigation.navigate("Leccion", {})}
          position={"center"}
          ref={"modal3"}
          isDisabled={this.state.isDisabled}
        >
          <Text style={styles.calificacion}>
            {"Tu Calificacion es: " + this.state.calificacion}
          </Text>
          <Button
            onPress={() => this.props.navigation.navigate("Leccion", {})}
            title={"Aceptar"}
            style={styles.btn}
          />
        </Modal>
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  otherContentContainer: {
    backgroundColor: "transparent",
    paddingVertical: 10,
    paddingLeft: 2,
    paddingRight: 2
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "stretch",
    backgroundColor: "transparent",
    width: null,
    height: null

    /* flex: 1,
    flexDirection: "column" */
  },
  contentContainer: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%"
  },
  paragraph: {
    fontSize: RF(2.8),
    textAlign: "left",
    fontWeight: "100",
    backgroundColor: "#fff",
    marginTop: 10,
    marginBottom: 10,
    padding: 5 /*,
    borderColor: '#d8d8d8',
    borderRadius: 5,
    borderWidth: 6,*/
  },
  textoPreguntas: {
    fontSize: RF(3),
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "transparent",
    width: "100%",
    marginTop: 2,
    marginBottom: 2,
    padding: 10
  },
  textoRespuestas: {
    fontSize: RF(2.5),
    textAlign: "left",
    fontWeight: "200",
    backgroundColor: "transparent",
    width: "100%",
    marginTop: 2,
    marginBottom: 2,
    padding: 10,
    borderWidth: 1,
    borderColor: "black"
  },
  modal: {
    justifyContent: "center",
    alignItems: "center"
  },
  modal3: {
    height: 100,
    width: 300
  },
  calificacion: {
    paddingBottom: "5%",
    fontSize: RF(3),
    fontWeight: "bold"
  },
  spinner: {
    paddingBottom: "50%"
  }
});
