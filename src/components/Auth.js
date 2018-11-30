import React from 'react';
import { Text, View, Button, Image, TouchableHighlight } from 'react-native';
import { Input } from 'react-native-elements';
import { Font } from 'expo';


export default class AuthScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Image
          source={require('./img/Logo.png')}
          style={{width: 200, height: 200}}
        />

        <Input
          placeholder='Enter Code'
        />

        <TouchableHighlight
          style ={{
            height: 40,
            width: 180,
            borderRadius: 8,
            backgroundColor: '#47B1C0',
            marginLeft: 50,
            marginRight: 50,
            marginTop: 20
        }}>
        <Button
          title='Submit Code'
          onPress={() => this.props.navigation.navigate('HomePage')}
          color='#FFFFFF'
        />
        </TouchableHighlight>

          <Text style={{marginTop: 100}}>
            “We rise by lifting others”
          </Text>

      </View>
    );
  }
}
