import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';
import Global from './Screens/Global';
import Country from './Screens/Country';
import WelcomeScreen from './Screens/WelcomeScreen';
import AllCountriesList from './Screens/AllCountriesList';
import FAQ from './Screens/FAQ';
import { CustomSideBar } from './Components/CustomSideBar';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import { TabNavigation } from './Components/TabNavigation';
import { SideDrawer } from './Components/SideDrawer'

export default function App() {
  return (
    <Container/>
  );
}
const SwitchNavigation = createSwitchNavigator({
    TabNavigation: { screen: CustomSideBar },
});


const Container = createAppContainer(SwitchNavigation);
