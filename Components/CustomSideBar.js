import React from 'react';
import { Image } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import SideDrawer from './SideDrawer';
import { createDrawerNavigator } from 'react-navigation-drawer';
import FAQ from '../Screens/FAQ';
import Global from '../Screens/Global';
import { TabNavigation } from './TabNavigation';
import Vaccines from '../Screens/Vaccines';
import { Icon } from 'react-native-elements';

export const CustomSideBar = createDrawerNavigator(
  {
    Global: { screen: TabNavigation },

    FAQ: { screen: FAQ },
  },
  { contentComponent: SideDrawer },
  { initialRouteName: Global }
);
