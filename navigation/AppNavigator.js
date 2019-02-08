import React from 'react';
import { Button, Text, View, StyleSheet,  ActivityIndicator, AsyncStorage, StatusBar } from 'react-native';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import AuthLoadingScreen from '../screens/AuthLoadingScreen';//valida si ya esta logueado o no
import SignInScreen from '../screens/SinginScreen';//pantalla login
import MainTabNavigator from './MainTabNavigator';//es el navegador de la app cuando estas logeado

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStack,
  App: MainTabNavigator,
},{
  initialRouteName: 'AuthLoading',
}));

