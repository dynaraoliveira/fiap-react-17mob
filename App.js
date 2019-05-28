import React from 'react';

import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import HomeScreen from './screens/Home';
import RacesScreen from './screens/Races';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Races: {
      screen: RacesScreen,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#333',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    },
  }
);

export default createAppContainer(AppNavigator);