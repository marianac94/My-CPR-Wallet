import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image, Animated, Dimensions, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { NavigationBar } from 'navigationbar-react-native';
import { SafeAreaView } from 'react-navigation';
const { width, height } = Dimensions.get('window')


export default class HomePage extends React.Component {
  render() {
    return (
        <ScrollView>
        <StatusBar hidden />
          <View style={styles.container}>

            <Image
              style={styles.image}
              source={require('../images/before.png')}
              resizeMode='cover'
            />

            <Button
            title='Start CPR'
            onPress={() => this.props.navigation.navigate('CPR_Infant')}
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
    image: {
      width,
      height: 650,
      position: 'relative',
    }
  }
