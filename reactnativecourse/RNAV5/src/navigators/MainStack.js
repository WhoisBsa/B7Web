import React from 'react';
import {Button, Image, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../pages/HomeScreen';
import AboutScreen from '../pages/AboutScreen';

const MainStack = createStackNavigator();

export default () => (
  <MainStack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: 'dodgerblue',
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
      },
    }}>
    <MainStack.Screen name="Home" component={HomeScreen} />
    <MainStack.Screen name="About" component={AboutScreen} />
  </MainStack.Navigator>
);
