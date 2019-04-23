import React, { Component } from "react";
import { ImageBackground } from 'react-native';
import styles from "../estudiar/components/lecciones/enemigos/modulos/css/estilo";
let home = "";
export default class Home extends Component {
    static navigationOptions = {
        title: 'Home',
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
    render() {
        return (
            <React.Fragment>
                <ImageBackground source={{uri:'https://www.axonplataforma.com.ar/images/intro.png'}} style={{width: '100%', height: '100%'}} />
            </React.Fragment>
        );
    }
}