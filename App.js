import React from 'react';

import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import HomeScreen from './screens/Home';
import MenuScreen from './screens/Menu';
import RacesScreen from './screens/Races';
import DriversScreen from './screens/Drivers';
import ResultsScreen from './screens/Results';
import RacesDetailsScreen from './screens/RacesDetails';
import DriversDetailsScreen from './screens/DriversDetails';
import ResultsDetailsScreen from './screens/ResultsDetails';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Races: {
      screen: RacesScreen,
    },
    Menu: {
      screen: MenuScreen,
    },
    Drivers: {
      screen: DriversScreen,
    },
    Results: {
      screen: ResultsScreen,
    },
    RacesDetails: {
      screen: RacesDetailsScreen,
    },
    DriversDetails: {
      screen: DriversDetailsScreen,
    },
    ResultsDetails: {
      screen: ResultsDetailsScreen,
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