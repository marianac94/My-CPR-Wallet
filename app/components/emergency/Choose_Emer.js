import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image, Animated, Dimensions, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { NavigationBar } from 'navigationbar-react-native';


export default class HomePage extends React.Component {
  render() {
    return (
        <ScrollView>
          <StatusBar hidden />

          <View style={styles.container}>

            <Button
            title='Infant'
            onPress={() => this.props.navigation.navigate('Before_Infant')}
            color='#A50A0A'
            />

            <Button
            title='Child'
            onPress={() => this.props.navigation.navigate('Before_Child')}
            color='#A50A0A'
            />

            <Button
            title='Adult'
            onPress={() => this.props.navigation.navigate('Before_Adult')}
            color='#A50A0A'
            />

            <Button
            title='Pet'
            onPress={() => this.props.navigation.navigate('Before_Pet')}
            color='#A50A0A'
            />

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
