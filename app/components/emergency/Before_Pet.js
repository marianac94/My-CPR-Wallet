import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image, Animated, Dimensions, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { NavigationBar } from 'navigationbar-react-native';
import { SafeAreaView } from 'react-navigation';
const { width, height } = Dimensions.get('window')


export default class HomePage extends React.Component {
  render() {
    return (
        <ScrollView>
          <StatusBar barStyle='light-content' />
          <View style={styles.container}>

            <Image
              style={styles.image}
              source={require('../images/before.png')}
              resizeMode='cover'
            />

          <TouchableHighlight style={styles.main_btn}>
            <Button
              title='Start CPR'
              onPress={() => this.props.navigation.navigate('CPR_Pet')}
              color='#FFFFFF'
            />
            </TouchableHighlight>

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
      height: 600,
      position: 'relative',
      marginTop: 10,
    },
    main_btn: {
      height: 40,
      width: 320,
      borderRadius: 8,
      backgroundColor: '#A50A0A',
      marginTop: -10,
      marginLeft: 28,
      marginRight: 10,
    },
  }
