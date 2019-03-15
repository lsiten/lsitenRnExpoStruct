import React from 'react'
import { Platform } from 'react-native';
import { createStackNavigator} from 'react-navigation';

import TabBarIcon from '../compoments/TabBarIcon';
import SettingsScreen from '../pages/Setting/Index'

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default SettingsStack