import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, TouchableHighlight, Image, Animated, Dimensions, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import Swiper from 'react-native-swiper'
import call from 'react-native-phone-call'
const { width, height } = Dimensions.get('window')
import { NavigationBar } from 'navigationbar-react-native';
import { SafeAreaView } from 'react-navigation';


// Make the call to 911 (only mobile friendy)
// const args = {
//   number: '911', // String value with the number to call
//   prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call
// }
// call(args).catch(console.error)

const ComponentLeft = () => {
  return(
    <View style={{ flex: 1, alignItems: 'flex-start'}} >
       <TouchableOpacity style={ {justifyContent:'center', flexDirection: 'row'}}>
        <Image
          source={require('./images/ic_back.png')}
          style={{ resizeMode: 'contain', width: 20, height: 20, alignSelf: 'center' }}
        />
        <Text style={{ color: 'white', }}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const ComponentCenter = () => {
  return(
    <View style={{ flex: 1, }}>
       <Image
        source={require('./images/LogoIcon.png')}
        style={{resizeMode: 'contain', width: 200, height: 35, alignSelf: 'center' }}
      />
    </View>
  );
};

export default class HomePage extends React.Component {
  render() {
    return (
    <ScrollView>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.fixBackground}>
          <StatusBar hidden />

        <NavigationBar
          componentLeft     = { () =>  <ComponentLeft />   }
          componentCenter   = { () =>  <ComponentCenter /> }
          navigationBarStyle= {{ backgroundColor: '#A50A0A', height: 75 }}
          statusBarStyle    = {{ barStyle: 'light-content', backgroundColor: '#A50A0A' }}
        />

        <StatusBar barStyle='light-content' />
          <Swiper style={styles.wrapper}
            dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}

            activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}

            paginationStyle={{
            bottom: 350
            }}
            loop={false}>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require('./images/1.jpg')}
              resizeMode='cover'
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require('./images/2.jpg')}
              resizeMode='cover'
            />
          </View>
          <View style={styles.slide}>
            <Image style={styles.image} source={require('./images/3.jpg')} />
          </View>
        </Swiper>

        <TouchableHighlight
          style ={{ height: 40, width: 340, borderRadius: 8, backgroundColor: '#A50A0A', marginTop: -255, marginLeft: 15, marginRight: 10, }}>
        <Button
          title='Emergency'
          onPress={() => this.props.navigation.navigate('Choose_Emer')}
          color='#FFFFFF'
        />
        </TouchableHighlight>

        <TouchableHighlight
          style ={{ height: 40, width: 340, borderRadius: 8, backgroundColor: '#A50A0A', marginTop: -255, marginLeft: 15, marginRight: 10, }}>
        <Button
          title='Google Maps'
          onPress={() => this.props.navigation.navigate('Screen1')}
          color='#FFFFFF'
        />
        </TouchableHighlight>

      </View>
    </SafeAreaView>
  </ScrollView>
    )
  }
}

const styles = {
  safeArea: {
    flex: 1,
  },
  fixBackground: {
    position: 'relative',
    bottom: 0,
    right: 0,
    left: 0,
    height: 400,
    zIndex: -1000,
  },
  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  container: {
    flex: 1,
  },
  image: {
    width,
    height: 500,
  }
}
