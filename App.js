import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import TransactionScreen from './Screens/screen1';
import SearchScreen from './Screens/Screen2'

export default class App extends React.Component{
  render(){
  return (
   <AppContainer/>
  );
}
}

const TabNavigator = createBottomTabNavigator({
  Transaction:{screen:TransactionScreen},
  Search:{screen:SearchScreen},
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({})=>{
      const routeName = navigation.state.routeName
      if(routeName === 'Transaction'){
        return(
          <Image
          source = {require('./assets/book.png')}
          style={{width:40,height:40}}/>
        )
      }
      else if (routeName === 'Search'){
        return(
        <Image
        source = {require('./assets/searchingbook.png')}
        style={{width:40,height:40}}/>
        )
      }
    }
  })
});

const AppContainer = createAppContainer(TabNavigator);