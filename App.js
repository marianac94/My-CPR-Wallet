import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';


class AuthScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Image</Text>
        <Text>Enter Code</Text>
        <Button
          title='Submit Code'
          onPress={() => this.props.navigation.navigate('HomePage')}
        />
      </View>
    );
  }
}


class HomePage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome to the Main Page</Text>
      <Button
        title='Go Back'
        onPress={() => this.props.navigation.navigate('AuthScreen')}
      />
      </View>
    )
  }
}


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
