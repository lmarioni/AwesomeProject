import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import EstudiarScreen from '../screens/estudiar/EstudiarScreen';
  import LeccionScreen from '../screens/estudiar/LeccionScreen';
  //Estos son de prueba para los modulos de la leccion 1:
    import Teorico1Screen from '../screens/estudiar/components/lecciones/enemigos/modulos/Teorico1Screen';
    import Teorico2Screen from '../screens/estudiar/components/lecciones/enemigos/modulos/Teorico2Screen';
    import Teorico3Screen from '../screens/estudiar/components/lecciones/enemigos/modulos/Teorico3Screen';
    import Teorico4Screen from '../screens/estudiar/components/lecciones/enemigos/modulos/Teorico4Screen';
    import Teorico5Screen from '../screens/estudiar/components/lecciones/enemigos/modulos/Teorico5Screen';
    import Teorico6Screen from '../screens/estudiar/components/lecciones/enemigos/modulos/Teorico6Screen';
    import Teorico7Screen from '../screens/estudiar/components/lecciones/enemigos/modulos/Teorico7Screen';
    import Teorico8Screen from '../screens/estudiar/components/lecciones/enemigos/modulos/Teorico8Screen';
    import Teorico9Screen from '../screens/estudiar/components/lecciones/enemigos/modulos/Teorico9Screen';
    import Teorico10Screen from '../screens/estudiar/components/lecciones/enemigos/modulos/Teorico10Screen';


// import ModulosScreen from '../screens/estudiar/ModulosScreen';
import CalendarioScreen from '../screens/calendario/CalendarioScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import ClaseScreen from '../screens/calendario/ClaseScreen';




const HomeStack = createStackNavigator({
  Estudiar: EstudiarScreen,
  Leccion: LeccionScreen,
  Teorico1Screen: Teorico1Screen,
  Teorico2Screen: Teorico2Screen,
  Teorico3Screen: Teorico3Screen,
  Teorico4Screen: Teorico4Screen,
  Teorico5Screen: Teorico5Screen,
  Teorico6Screen: Teorico6Screen,
  Teorico7Screen: Teorico7Screen,
  Teorico8Screen: Teorico8Screen,
  Teorico9Screen: Teorico9Screen,
  Teorico10Screen: Teorico10Screen
  // Modulos: ModulosScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Estudiar',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-book'
          : 'md-information-circle'
      }
    />
  ),
    };
const CalendarioStack = createStackNavigator({
  Calendario: CalendarioScreen,
  Clase: ClaseScreen,
});

CalendarioStack.navigationOptions = {
  tabBarLabel: 'Calendario',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-easel' : 'md-link'}
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  CalendarioStack,
  ProfileStack,
});
