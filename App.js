
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import{createBottomTabNavigator} from 'react-navigation-tabs';
import ins from './screens/ins';
import fb from './screens/fb';


export default class App extends React.Component {
  render(){
  return (
    
    
     <AppContainer/>
    
  );
}
}
const TabNavigator=createBottomTabNavigator({
  ins:ins,
  fb:fb
});

const AppContainer=createAppContainer(TabNavigator);


