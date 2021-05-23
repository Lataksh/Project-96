import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Global from '../Screens/Global';
import Country from '../Screens/Country';
import WelcomeScreen from '../Screens/WelcomeScreen';
import AllCountriesList from '../Screens/AllCountriesList';


export const TabNavigation = createBottomTabNavigator({
  Global: {
    screen: Global,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/global.png')}
          style={{ width: 27, height: 27, borderRadius: 50 }}
        />
      ),
      tabBarLabel: 'Global',
    },
  },
  Country: {
    screen: Country,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/countrt.png')}
          style={{ width: 27, height: 27, borderRadius: 50 }}
        />
      ),
      tabBarLabel: 'Country',
    },
  },
  AllCountriesList: {
    screen: AllCountriesList,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/all.jpg')}
          style={{ width: 27, height: 27, borderRadius: 50 }}
        />
      ),
      tabBarLabel: 'World',
    },
  },
});