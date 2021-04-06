
import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import NotificationScreen from '../screens/NotificationScreen'

import CustomSidebarMenu  from './CustomSidebarMenu';
import SettingScreen from '../screens/SettingScreen'
import { Icon } from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
  Setting : {
    screen : SettingScreen ,
    
    },
    
    Notifications:{
      screen:NotificationScreen,
      navigationOptions:{
        drawerIcon:<Icon
          name = 'bell'
          type = 'font-awesome'
        />
      }
    },

    
// Settings:{
//     screen : SettingScreen,
//     navigationOptions:{
//       drawerIcon:<Icon
//       name =  'settings'
//       type = 'font-awesome'
//       />
//     }
//     }

    
  },
  {
    contentComponent:CustomSidebarMenu
  },
  {
    initialRouteName : 'Setting'
  })