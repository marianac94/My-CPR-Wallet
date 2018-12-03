import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image, Animated, Dimensions, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { NavigationBar } from 'navigationbar-react-native';
import { SafeAreaView } from 'react-navigation';


export default class HomePage extends React.Component {
  render() {
    return (
        <ScrollView>
        <StatusBar hidden />
          <View style={styles.container}>

            <Text>Image of instructions</Text>

          </View>
        </ScrollView>
      )
    }
  }


  const styles = {
    container: {
      flex: 1,
    },
  }
