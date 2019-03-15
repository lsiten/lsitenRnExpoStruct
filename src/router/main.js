import { createBottomTabNavigator } from 'react-navigation';

import HomeStack from './home'
import LinksStack from './links'
import SettingsStack from './setting'

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});