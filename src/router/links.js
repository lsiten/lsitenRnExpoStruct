import React from 'react'
import { Platform } from 'react-native';
import { createStackNavigator} from 'react-navigation';

import TabBarIcon from '../compoments/TabBarIcon';
import LinksScreen from '../pages/Link/Index'

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

export default LinksStack