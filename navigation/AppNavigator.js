import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import AuthLoadingScreen from '../screens/AuthLoadingScreen';//valida si ya esta logueado o no
import SignInScreen from '../screens/singin/SinginScreen';//pantalla login
import MainTabNavigator from './MainTabNavigator';//es el navegador de la app cuando estas logeado


//A ESTOS DOS LOS TENGO QUE METER EN UN ARCHIVO ACA AL LADO QUE SEA LoginNavigation.js o no


const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStack,
  App: MainTabNavigator,
},{
  initialRouteName: 'AuthLoading',
}));

