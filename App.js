import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import AuthScreen from './src/components/Auth';
import HomePage from './src/components/HomePage';


const RootStack = createStackNavigator({
  AuthScreen: {
    screen: AuthScreen,
  },
  HomePage: {
    screen: HomePage,
  },
}, {
  initialRouteName: 'AuthScreen',
});


const AppContainer = createAppContainer(RootStack);


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
