import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image, Animated, Dimensions, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { NavigationBar } from 'navigationbar-react-native';
import { SafeAreaView } from 'react-navigation';
const { width, height } = Dimensions.get('window')

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
          <StatusBar barStyle='light-content' />
          <View style={styles.container}>

            <Image
              style={styles.image}
              source={require('../images/cpr_pet.png')}
              resizeMode='cover'
            />

          <TouchableHighlight style={styles.main_btn}>
            <Button
              title='Nearest Vets'
              onPress={() => this.props.navigation.navigate('Screen1')}
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
      height: 650,
      position: 'relative',
      marginTop: -10,
    },
    main_btn: {
      height: 40,
      width: 320,
      borderRadius: 8,
      backgroundColor: '#A50A0A',
      marginTop: -20,
      marginLeft: 28,
      marginRight: 10,
    },
  }
