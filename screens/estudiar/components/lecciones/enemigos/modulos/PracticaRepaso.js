import RF from "react-native-responsive-fontsize";
import {
  Text,
  View,
  Animated,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert
} from "react-native";
import React, { Component } from "react";
import { Card, Icon, Button } from "react-native-elements";
import RadioGroup, { Radio } from "react-native-radio-input";

export default class PracticaRepaso extends Component {
  constructor(props) {
    super(props);
    (this.state.titulo = "Bienvenido"),
      (this.state.step = 1),
      //this.state ={ isLoading: true},
      (dataSource = []);
  }
  state = {
    fadeAnim: new Animated.Value(1), // Initial value for opacity: 0,
    step: 1,
    idCarta: 7,
    evaluaciones: [],
    radioRes: ""
  };
  async componentDidMount() {
    return fetch("https://api.axontraining.com/lecciones/evaluaciones/17")
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
            eleccion: 1
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
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
  mostrarTarjeta = (data, eleccion) => {
    if (!data) {
      console.log("Está cargando");
    } else {
      switch (eleccion) {
        case 1:
          return (
            <React.Fragment>
              <Text style={styles.paragraph}>
                Respondé las preguntas para saber cuánto aprendiste de la
                lección. Recordá que si salís de la evaluación antes de terminar
                todas las preguntas, tu progreso se guardará y lo podras seguir
                luego.
              </Text>
            </React.Fragment>
          );
          break;
        case 2:
          console.log(this.state.eleccion);
          break;
      }
      data.map(evaluacion =>
        evaluacion.respuestas.map(respuesta => console.log(evaluacion))
      );
    }
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
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    } else if (this.state.idCarta <= this.state.dataSource.length - 1) {
      console.log("EMPIEZA " + this.state.idCarta);
      await this.setState({
        evaluaciones: [
          ...this.state.evaluaciones,
          {
            id: this.state.dataSource[this.state.idCarta].id,
            respuesta: this.state.radioRes
          }
        ]
      });
      if (this.state.idCarta === this.state.dataSource.length - 1) {
        fetch("http://192.168.1.103:80/api/lecciones/correcion", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.state.evaluaciones)
        })
          .then(response => response.json())
          .then(responseJson => {
            console.log(responseJson);
          });
      }
      if (this.state.idCarta < this.state.dataSource.length - 1) {
        this.setState(
          {
            idCarta: this.state.idCarta + 1,
            radioRes: ""
          },
          () => {
            console.log("AUMENTA " + this.state.idCarta);
          }
        );
      }

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
    if (this.state.idCarta == this.state.dataSource.length - 1) {
      //console.log(this.state.form);
      /* fetch("http://192.168.1.103:80/api/lecciones/correcion", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: {
          form: this.state.form
        }
      }); */
      /* return fetch("http://192.168.1.103:80/api/lecciones/correcion",
      
      )
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);
        })
        .catch(error => {
          console.error(error);
        }); */
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
      <ScrollView>
        <View style={styles.container}>
          {/*<FlatList
    data= {this.state.dataSource}
    ItemSeparatorComponent = {this.FlatListItemSeparator}
    renderItem= {item=> this.renderItem(item)}
    keyExtractor= {item=>item.id.toString()}
        />*/}
          <Card
            title={this.state.titulo}
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent:
                "space-between" /* flex: 1,border: 2, width: "100%", height: "100%"*/
            }}
          >
            <Animated.View
              style={
                {
                  /* ...this.props.style, flex: 1, width: "100%", height: "100%", opacity: fadeAnim, fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: '#34495e', flex: 1, alignItems: "center", flexDirection:"column", justifyContent: 'space-between'*/
                }
              }
            >
              <React.Fragment>
                <Text style={styles.textoPreguntas}>
                  {this.state.dataSource &&
                    this.state.dataSource[this.state.idCarta].descripcion}
                </Text>
                <RadioGroup
                  getChecked={this.getChecked}
                  RadioStyle={{ marginRight: 25 }}
                  labelStyle={{ fontSize: 14, padding: 5 }}
                >
                  {this.state.dataSource &&
                    this.state.dataSource[this.state.idCarta].respuestas.map(
                      (respuesta, key) => (
                        <Radio
                          key={key}
                          iconName={"lens"}
                          label={respuesta.opcionAbierta}
                          value={JSON.stringify({
                            id: respuesta.id,
                            opcionCorrecta: respuesta.opcionCorrecta
                          })}
                        />
                      )
                    )}
                </RadioGroup>
              </React.Fragment>
            </Animated.View>
          </Card>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row"
            }}
          >
            <Button
              icon={
                <Icon
                  type="font-awesome"
                  name="arrow-circle-left"
                  color="#ffffff"
                />
              }
              backgroundColor="#0081C4"
              buttonStyle={{
                borderRadius: 5,
                marginLeft: 5,
                marginRight: 5,
                marginBottom: 0,
                width: 150
              }}
              title=" Anterior"
              onPress={this._onPress}
            />
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
                width: 150
              }}
              title=" Siguiente"
              onPress={this._onPress}
            />
          </View>
        </View>
      </ScrollView>
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
    /*flex: 1,
    justifyContent: "flex-start",
    alignSelf: "stretch",
    backgroundColor: 'transparent',*/
    flex: 1,
    flexDirection: "column"
    //flexDirection: 'row'
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
  }
});
