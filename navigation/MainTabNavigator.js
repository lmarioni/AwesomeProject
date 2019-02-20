import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import EstudiarScreen from '../screens/estudiar/EstudiarScreen';
import LeccionScreen from '../screens/estudiar/LeccionScreen';
import CalendarioScreen from '../screens/calendario/CalendarioScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import ClaseScreen from '../screens/calendario/ClaseScreen';

const HomeStack = createStackNavigator({
  Estudiar: EstudiarScreen,
  Leccion: LeccionScreen,
});

// HomeStack.navigationOptions = {
//   tabBarLabel: 'Home',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),
// };

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
