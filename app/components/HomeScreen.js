import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, TouchableHighlight, Image, Animated, Dimensions, ScrollView, StatusBar, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { Constants } from 'expo';
import Swiper from 'react-native-swiper'
import call from 'react-native-phone-call'
const { width, height } = Dimensions.get('window')
import { NavigationBar } from 'navigationbar-react-native';

// Make the call to 911 (only mobile friendy)
// const args = {
//   number: '911', // String value with the number to call
//   prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call
// }
// call(args).catch(console.error)

export default class HomePage extends React.Component {
  render() {
    return (
    <ScrollView>
      <View style={styles.fixBackground}>

        <StatusBar barStyle='light-content' />

          <Swiper style={styles.wrapper}
            dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}

            activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}

            paginationStyle={{ bottom: 20 }}
            loop={true}>

          <View style={styles.slide}>
            <Image style={styles.image} source={require('./images/1.jpg')} resizeMode='cover' />
          </View>

          <View style={styles.slide}>
            <Image style={styles.image} source={require('./images/2.jpg')} resizeMode='cover' />
          </View>

          <View style={styles.slide}>
            <Image style={styles.image} source={require('./images/3.jpg')} resizeMode='cover' />
          </View>
        </Swiper>

        <TouchableHighlight
          style={{ height: 40, width: 320, borderRadius: 8, backgroundColor: '#A50A0A', marginTop: 30, marginLeft: 25, marginRight: 5, }}>
        <Button
          title='Emergency'
          onPress={() => this.props.navigation.navigate('Choose_Emer')}
          color='#FFFFFF'
        />
        </TouchableHighlight>

        </View>
      </ScrollView>
    )
  }
}

const styles = {
  fixBackground: {
    position: 'relative',
    bottom: 0,
    right: 0,
    left: 0,
    height: 580,
    zIndex: 100,
  },
  slide: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
  },
  image: {
    width,
    height: 550,
    marginBottom: 10,
    marginTop: 50,
  },
}
