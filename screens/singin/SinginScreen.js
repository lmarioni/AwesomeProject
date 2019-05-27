import React from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  Platform,
  Button,
  StyleSheet,
  View,
  Text,
  TextInput,
  Alert
} from "react-native";
import axios from "axios";

export default class SignInScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      animating: false,
      login: false,
      errorText: null,
      email: "alvaro.gamboa@axont.com",
      password: "finlandia2019**"
    };
  }

  static navigationOptions = {
    title: "Bienvenido"
  };

  render() {
    return (
      <View>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            margin: 10,
            paddingLeft: 10
          }}
          onChangeText={email => this.setState({ email })}
          placeholder="Ingrese un email"
          value={this.state.email}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            margin: 10,
            paddingLeft: 10
          }}
          secureTextEntry={true}
          keyboardType="email-address"
          onChangeText={password => this.setState({ password })}
          placeholder="Ingrese su Contraseña"
          value={this.state.password}
        />
        <Button title="Ingresar" onPress={this._loguearse} />
        <ActivityIndicator
          animating={this.state.animating}
          color="#bc2b78"
          size="large"
        />
        <Text style={{ textAlign: "center", color: "red" }}>
          {" "}
          {this.state.errorText}{" "}
        </Text>
      </View>
    );
  }

  _loguearse = () => {
    this.setState({ animating: true });
    axios
      .post("https://api.axontraining.com/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        AsyncStorage.setItem("userToken", res.data.token);
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + res.data.token;
        axios.get("https://api.axontraining.com/sesion").then(res => {
          AsyncStorage.setItem("sesion", JSON.stringify(res.data));
        });
        this.props.navigation.navigate("App");
      })
      .catch(error => {
        Alert.alert(
          "Email o Contraseña incorrecta",
          "",
          [{ text: "Aceptar" }],
          { cancelable: false }
        );
      });
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
