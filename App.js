import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TouchableHighlight, ScrollView, StatusBar, Platform, SafeAreaView, Container, Title, FooterTab, Footer, TabBarIOS, Component, AppRegistry } from 'react-native';
import { createAppContainer, TabNavigator, createBottomTabNavigator, createStackNavigator, DrawerItems, HeaderBackButton, StackNavigator } from 'react-navigation';
import { BottomNavigation, Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'


import AuthScreen from './app/components/Auth';
import HomeScreen from './app/components/HomeScreen';
import Screen1 from './app/components/maps/Screen1';
import Choose_Emer from './app/components/emergency/Choose_Emer';
import Before_Infant from './app/components/emergency/Before_Infant';
import Before_Child from './app/components/emergency/Before_Child';
import Before_Adult from './app/components/emergency/Before_Adult';
import Before_Pet from './app/components/emergency/Before_Pet';
import CPR_Infant from './app/components/emergency/CPR_Infant';
import CPR_Child from './app/components/emergency/CPR_Child';
import CPR_Adult from './app/components/emergency/CPR_Adult';
import CPR_Pet from './app/components/emergency/CPR_Pet';


class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./app/components/images/LogoIcon.png')}
        style={{ width: 43, height: 43 }}
      />
    );
  }
}


const RootStack = createStackNavigator(
  {
  AuthScreen: {
    screen: AuthScreen,
  },
  HomeScreen: {
    screen: HomeScreen,
      navigationOptions: {
        headerTitle: <LogoTitle />,
        headerTitleStyle: {
          color: '#fff',
        },
        headerBackTitleStyle: {
            color: '#fff',
        },
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#A50A0A',
          height: 80,
      },
    },
  },
  Screen1: {
    screen: Screen1,
    navigationOptions: {
      headerTitle: <LogoTitle />,
      headerTitleStyle: {
        color: '#fff',
      },
      headerBackTitleStyle: {
          color: '#fff',
      },
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#A50A0A',
        height: 80,
    },
  },
},
  Choose_Emer: {
    screen: Choose_Emer,
    navigationOptions: {
      headerTitle: <LogoTitle />,
      headerTitleStyle: {
        color: '#fff',
      },
      headerBackTitleStyle: {
          color: '#fff',
      },
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#A50A0A',
        height: 80,
    },
  },
  },
  Before_Infant: {
    screen: Before_Infant,
    navigationOptions: {
      headerTitle: <LogoTitle />,
      headerTitleStyle: {
        color: '#fff',
      },
      headerBackTitleStyle: {
          color: '#fff',
      },
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#A50A0A',
        height: 80,
    },
  },
  },
  Before_Child: {
    screen: Before_Child,
    navigationOptions: {
      headerTitle: <LogoTitle />,
      headerTitleStyle: {
        color: '#fff',
      },
      headerBackTitleStyle: {
          color: '#fff',
      },
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#A50A0A',
        height: 80,
    },
  },
  },
  Before_Adult: {
    screen: Before_Adult,
    navigationOptions: {
      headerTitle: <LogoTitle />,
      headerTitleStyle: {
        color: '#fff',
      },
      headerBackTitleStyle: {
          color: '#fff',
      },
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#A50A0A',
        height: 80,
    },
  },
  },
  Before_Pet: {
    screen: Before_Pet,
    navigationOptions: {
      headerTitle: <LogoTitle />,
      headerTitleStyle: {
        color: '#fff',
      },
      headerBackTitleStyle: {
          color: '#fff',
      },
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#A50A0A',
        height: 80,
    },
  },
  },
  CPR_Infant: {
    screen: CPR_Infant,
    navigationOptions: {
      headerTitle: <LogoTitle />,
      headerTitleStyle: {
        color: '#fff',
      },
      headerBackTitleStyle: {
          color: '#fff',
      },
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#A50A0A',
        height: 80,
    },
  },
  },
  CPR_Child: {
    screen: CPR_Child,
    navigationOptions: {
      headerTitle: <LogoTitle />,
      headerTitleStyle: {
        color: '#fff',
      },
      headerBackTitleStyle: {
          color: '#fff',
      },
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#A50A0A',
        height: 80,
    },
  },
  },
  CPR_Adult: {
    screen: CPR_Adult,
    navigationOptions: {
      headerTitle: <LogoTitle />,
      headerTitleStyle: {
        color: '#fff',
      },
      headerBackTitleStyle: {
          color: '#fff',
      },
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#A50A0A',
        height: 80,
    },
  },
  },
  CPR_Pet: {
    screen: CPR_Pet,
    navigationOptions: {
      headerTitle: <LogoTitle />,
      headerTitleStyle: {
        color: '#fff',
      },
      headerBackTitleStyle: {
          color: '#fff',
      },
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#A50A0A',
        height: 80,
    },
  },
  },
},
  { initialRouteName: 'AuthScreen',
  mode: Platform.OS === 'ios' ? 'modal' : 'card'
  }
)

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.safeArea}>
          <AppContainer />
        </View>
    )
  }
}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FF5236'
  },
})
