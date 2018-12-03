import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image, Animated, Dimensions, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { NavigationBar } from 'navigationbar-react-native';
import { SafeAreaView } from 'react-navigation';


export default class HomePage extends React.Component {
  render() {
    return (
        <ScrollView>
        <StatusBar hidden />
          <View style={styles.container}>

            <Text>Emergency Info (same as everyone else)</Text>

            <Button
            title='Start CPR'
            onPress={() => this.props.navigation.navigate('CPR_Adult')}
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
