import React from 'react';
import { Platform, TouchableOpacity, StyleSheet, Text, View, Button, Dimensions, ScrollView, StatusBar, ActivityIndicator, Image,  } from 'react-native';
import { NavigationBar } from 'navigationbar-react-native';
import Carousel from 'react-native-looped-carousel';
const { width, height } = Dimensions.get('window');

export default class MyCarousel extends React.Component {
  constructor(props) {
    super(props);

  this.state = {
    size: { width, height },
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
      this.setState({ size: { width: 340, height: 560 } });
  }

  render() {
    return (
      <ScrollView>
        <StatusBar barStyle='light-content' />
          <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>

          <Carousel
            delay={8000}
            style={this.state.size}
            autoplay
            pageInfo
          >

            <View style={styles.component}>
              <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('Before_Infant')}>
              <Image style={styles.image} source={require('./../images/icon_infant.png')}/>
              </TouchableOpacity>
              <View style={ this.state.size }></View>
            </View>

            <View style={styles.component}>
              <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('Before_Child')}>
              <Image style={styles.image} source={require('./../images/icon_child.png')}/>
              </TouchableOpacity>
              <View style={ this.state.size }></View>
            </View>

            <View style={styles.component}>
              <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('Before_Adult')}>
              <Image style={styles.image} source={require('./../images/icon_adult.png')}/>
              </TouchableOpacity>
              <View style={ this.state.size }></View>
            </View>

            <View style={styles.component}>
              <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('Before_Pet')}>
              <Image style={styles.image} source={require('./../images/icon_pet.png')}/>
              </TouchableOpacity>
              <View style={ this.state.size }></View>
            </View>

          </Carousel>
        </View>
      </ScrollView>
      )
    }
  }



  const styles = {
    component: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#A50A0A',
      borderRadius: 18,
      marginTop: 35,
      marginLeft: 47,
      marginRight: 25,
    },
    image: {
      position: 'relative',
      width: 200,
      height: 300,
      marginTop: 560,
      marginLeft: 38,
    },
  }
