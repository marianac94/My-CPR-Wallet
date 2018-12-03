import React, { Component } from 'react'
import { Text, View, Button, Image, TouchableHighlight, ScrollView } from 'react-native';
import { Input } from 'react-native-elements';
import { Font } from 'expo';


export default class AuthScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 80 }}>

        <Image
          source={require('./images/Logo.png')}
          style={{width: 180, height: 180, marginBottom: 20}}
        />

        <Input
          placeholder='Enter Code'
        />

        <TouchableHighlight
          style ={{ height: 40, width: 340, borderRadius: 8, backgroundColor: '#A50A0A', marginLeft: 50, marginRight: 50, marginTop: 20 }}>
        <Button
          title='Submit Code'
          onPress={() => this.props.navigation.navigate('HomeScreen')}
          color='#FFFFFF'
        />
        </TouchableHighlight>

          <Text style={{marginTop: 180, color:'#A50A0A'}}>
            “WE RISE BY LIFTING OTHERS”
          </Text>

      </View>
    );
  }
}
