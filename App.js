import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Auth from './src/components/Auth';
import HomePage from './src/components/HomePage';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Auth />
        <HomePage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 100,
  },
});
