import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../pages/HomeScreen';

const MainStack = createStackNavigator();

export default () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor: '#aaa',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <MainStack.Screen name="Exercício" component={HomeScreen} />
    </MainStack.Navigator>
  );
};
