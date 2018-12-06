import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TouchableHighlight, ScrollView, StatusBar, Platform, SafeAreaView, Container, Title, FooterTab, Footer, TabBarIOS, Component, AppRegistry } from 'react-native';
const ms = require('pretty-ms')


class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: 0,
      isOn: false,
      start: 0
    }
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }
  startTimer() {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 1);
  }
  stopTimer() {
    this.setState({isOn: false})
    clearInterval(this.timer)
  }
  resetTimer() {
    this.setState({time: 0, isOn: false})
  }
  render() {

    let start = (this.state.time == 0) ?
      <Button
        title='start'
        onClick={this.startTimer}
        /> :
      null

    let stop = (this.state.time == 0 || !this.state.isOn) ?
      null :
      <Button
        title='stop'
        onClick={this.stopTimer}
      />

    let resume = (this.state.time == 0 || this.state.isOn) ?
      null :
      <Button
        title='resume'
        onClick={this.startTimer}
      />

    let reset = (this.state.time == 0 || this.state.isOn) ?
      null :
      <Button
        title='reset'
        onClick={this.resetTimer}
      />

    return(
      <View>
        <Text>timer: {ms(this.state.time)}</Text>
        {start}
        {resume}
        {stop}
        {reset}
      </View>
    )
  }
}
module.exports = Timer
