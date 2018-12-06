import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, TouchableHighlight, Image, Animated, Dimensions, ScrollView, StatusBar, TouchableOpacity, SafeAreaView, Platform, Footer, Title, Container, FooterTab, Icon } from 'react-native';
import { Constants } from 'expo';
import { NavigationBar } from 'navigationbar-react-native';
import Swiper from 'react-native-swiper'
import call from 'react-native-phone-call'
const { width, height } = Dimensions.get('window')

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
          style={{ height: 40, width: 320, borderRadius: 8, backgroundColor: '#A50A0A', marginTop: 20, marginLeft: 25, marginRight: 5 }}>
        <Button
          title='Emergency'
          onPress={() => this.props.navigation.navigate('Choose_Emer')}
          color='#FFFFFF'
        />
        </TouchableHighlight>

        <View>
          <Image style={styles.footerImg} source={require('./images/footer.png')} resizeMode='cover' />
        </View>

        <View>
          <Image style={styles.icons1} source={require('./images/icon4.png')} />
        </View>

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
  wrapper: {
    marginBottom: 10,
    marginTop: -30,
  },
  icons1: {
    position: 'absolute',
    marginTop: 40,
    marginLeft: 60,
  },
  footerImg: {
    position: 'absolute',
    marginTop: 20,
  },
}
