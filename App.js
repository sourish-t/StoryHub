import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabContainer} from 'react-navigation-tabs';
import {ReadStoryScreen} from './Screens/ReadStoryScreen';
import {WriteStoryScreen} from './Screens/WriteStoryScreen';
import {keyBoardAvoidingView} from 'react-ToastAndroid-native'

export default class App extends React.Component {

 
    render() {
      return (

        <View style={{flex:1}}>
          <Appcontainer />
          <ReadStoryScreen />
          <WriteStoryScreen />
       
        </View>
       
      )
    }
  }
  
  
  var switchContainer = createSwitchNavigator({
    ReadStoryScreen : ReadStoryScreen,
    WriteStoryScreen:WriteStoryScreen
  })
  const Appcontainer = createAppContainer(switchContainer)



