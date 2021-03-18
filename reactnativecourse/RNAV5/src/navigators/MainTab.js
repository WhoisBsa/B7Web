import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabHomeScreen from '../pages/TabHomeScreen';
import TabAboutScreen from '../pages/TabAboutSreen';
import TabConfigScreen from '../pages/TabConfigScreen';

import HomeStack from './HomeStack'

import CustomTabBar from '../components/CustomTabBar';
import TabBarIcon from '../components/TabBarIcon';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    initialRouteName="TabHome"
    // tabBar={(props) => <CustomTabBar {...props} />}
    screenOptions={({route}) => ({
      tabBarIcon: ({focused}) => <TabBarIcon name={route.name} />,
    })}
    tabBarOptions={{
      activeTintColor: 'dodgerblue',
    }}>
    <Tab.Screen
      name="TabConfig"
      component={TabConfigScreen}
      options={{
        tabBarLabel: 'Config',
      }}
    />
    <Tab.Screen
      name="TabHome"
      component={HomeStack}
      options={{
        tabBarLabel: 'Home',
      }}
    />
    <Tab.Screen
      name="TabAbout"
      component={TabAboutScreen}
      options={{
        tabBarLabel: 'Sobre',
        tabBarVisible: false,
      }}
    />
  </Tab.Navigator>
);
