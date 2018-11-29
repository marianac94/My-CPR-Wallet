import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class AuthScreen extends React.Component {
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
