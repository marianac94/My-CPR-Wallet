import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import AuthScreen from './app/components/Auth';
import HomeScreen from './app/components/HomeScreen';
import Screen1 from './app/components/maps/Screen1';
import Choose_Emer from './app/components/emergency/Choose_Emer';
import Before_Infant from './app/components/emergency/Before_Infant';
import Before_Child from './app/components/emergency/Before_Child';
import Before_Adult from './app/components/emergency/Before_Adult';
import Before_Pet from './app/components/emergency/Before_Pet';
import CPR_Infant from './app/components/emergency/CPR_Infant';
import CPR_Child from './app/components/emergency/CPR_Child';
import CPR_Adult from './app/components/emergency/CPR_Adult';
import CPR_Pet from './app/components/emergency/CPR_Pet';


const RootStack = createStackNavigator({
  AuthScreen: { screen: AuthScreen },
  HomeScreen: { screen: HomeScreen },
  Screen1: { screen: Screen1 },
  Choose_Emer: { screen: Choose_Emer },
  Before_Infant: { screen: Before_Infant },
  Before_Child: { screen: Before_Child },
  Before_Adult: { screen: Before_Adult },
  Before_Pet: { screen: Before_Pet },
  CPR_Infant: { screen: CPR_Infant },
  CPR_Child: { screen: CPR_Child },
  CPR_Adult: { screen: CPR_Adult },
  CPR_Pet: { screen: CPR_Pet },
},
{ initialRouteName: 'AuthScreen', });

const AppContainer = createAppContainer(RootStack);


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <AppContainer />
      </View>
    )
  }
}


const styles = {
  container: {
    flex: 1,
  },
}
