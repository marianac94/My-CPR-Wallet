import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Font } from 'expo';


export default class HomePage extends React.Component {
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
