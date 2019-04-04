import React from 'react';
import { 
  ActivityIndicator,
  AsyncStorage,
  Platform,
  Button,
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';

export default class SignInScreen extends React.Component {
  constructor(){
    super()
    this.state = {
      animating: false,
      login: false,
      errorText: null,
      email: null
    }
  }

    static navigationOptions = {
      title: 'Please sign in',
    };
  
    render() {
        return (
      <View>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1,margin:10,paddingLeft:10}}
        onChangeText={(email) => this.setState({email})}
        placeholder= 'Ingrese un email'
        value={this.state.email}
      />


        <Button title="Sign in!" onPress={this._loguearse} />
            <ActivityIndicator
               animating = {this.state.animating}
               color = '#bc2b78'
               size = "large"
                />
            <Text style={{textAlign: 'center',color:'red'}}> {this.state.errorText} </Text>
      </View>
    );
    }
  
    _loguearse = async () => {
      this.setState({animating:true})

     await fetch('http://api.axontraining.com/usuarios?email='+this.state.email)
        .then((response) => response.json())
        .then((responseJson) => {

            //console.log(Object.keys(responseJson).length);
            if(Object.keys(responseJson).length === 1){
              console.log('ok');
              console.log(responseJson[0].id);
               this.setState({
                   login: true
                   })
                   AsyncStorage.setItem('userId', responseJson[0].id);
            }else{
              this.setState({
                 login:false,
                 errorText: 'No existe el usuario',
                 animating: false
              })
            }
        });
        if(this.state.login){
           await AsyncStorage.setItem('userToken', 'abc');
            this.props.navigation.navigate('App');
        }else{
            console.log(this.state.errorText);
        }
        
  };
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    developmentModeText: {
      marginBottom: 20,
      color: 'rgba(0,0,0,0.4)',
      fontSize: 14,
      lineHeight: 19,
      textAlign: 'center',
    },
    contentContainer: {
      paddingTop: 30,
    },
    welcomeContainer: {
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 20,
    },
    welcomeImage: {
      width: 100,
      height: 80,
      resizeMode: 'contain',
      marginTop: 3,
      marginLeft: -10,
    },
    getStartedContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
    },
    homeScreenFilename: {
      marginVertical: 7,
    },
    codeHighlightText: {
      color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
      backgroundColor: 'rgba(0,0,0,0.05)',
      borderRadius: 3,
      paddingHorizontal: 4,
    },
    getStartedText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      lineHeight: 24,
      textAlign: 'center',
    },
    tabBarInfoContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        android: {
          elevation: 20,
        },
      }),
      alignItems: 'center',
      backgroundColor: '#fbfbfb',
      paddingVertical: 20,
    },
    tabBarInfoText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      textAlign: 'center',
    },
    navigationFilename: {
      marginTop: 5,
    },
    helpContainer: {
      marginTop: 15,
      alignItems: 'center',
    },
    helpLink: {
      paddingVertical: 15,
    },
    helpLinkText: {
      fontSize: 14,
      color: '#2e78b7',
    },
  });
  